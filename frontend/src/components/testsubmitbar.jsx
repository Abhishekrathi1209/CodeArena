import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Button, Tabs, Tab, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import axios from "axios";
// import { ISubmission, SubmissionTable } from "./SubmissionTable";
// import { CheckIcon, CircleX, ClockIcon } from "lucide-react";
import { toast } from "react-toastify";
import { LANGUAGE_MAPPING } from "./Constants";
import "../styles/ProblemSubmitBar.css"
import 'react-toastify/dist/ReactToastify.css';



const SubmitStatus = {
    SUBMIT: "SUBMIT",
    PENDING: "PENDING",
    ACCEPTED: "ACCEPTED",
    FAILED: "FAILED",
};

export const ProblemSubmitBar = ({ problem, contestId }) => {
    const [activeTab, setActiveTab] = useState("problem");

    return (
        <div className="container">
            <Tabs
                value={activeTab}
                onChange={(event, newValue) => setActiveTab(newValue)}
                aria-label="Problem Submission"
            >
                <Tab label="Submit" value="problem" />
                <Tab label="Submissions" value="submissions" />
            </Tabs>
            <div className={activeTab === "problem" ? "" : "hidden"}>
                <SubmitProblem problem={problem} contestId={contestId} />
            </div>
            {/* {activeTab === "submissions" && <Submissions problem={problem} />} */}
            {activeTab === "submissions" && <Submissions />}
        </div>
    );
};

function Submissions({ problem }) {

    return (
        <div>
            Hello
        </div>
    );
}

function SubmitProblem({ problem, contestId }) {
    const [language, setLanguage] = useState(Object.keys(LANGUAGE_MAPPING)[0]);
    const [code, setCode] = useState({});
    const [status, setStatus] = useState(SubmitStatus.SUBMIT);
    const [token, setToken] = useState(null);
    const [message, setMessage] = useState("Solve The Problem");

    useEffect(() => {
        const jwttoken = localStorage.getItem('token');
        setToken(jwttoken);
    }, [problem]);

    async function submit() {

        if (!token) {
            toast.error("Login to submit");
            return;
        }
        setStatus(SubmitStatus.PENDING);
        try {
            console.log("code: ", code[language]);
            console.log("languageId: ", LANGUAGE_MAPPING[language].Lang_Id);
            console.log("problemId: ", problem.id);
            console.log("activeContestId: ", contestId);
            console.log("authorization", token);
            const response = await axios.post('http://localhost:3000/api/submitcode', {
                sourceCode: code[language],
                languageId: LANGUAGE_MAPPING[language].Lang_Id,
                problemId: problem.id,
                activeContestId: contestId,
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            if (response.data.status === 'Accepted') {
                setMessage("Accepted")
                toast.success("Accepted")
            }
            else {
                setMessage(response.data.status)
                toast.error(response.data.status)
            }
            setStatus(SubmitStatus.ACCEPTED);

        } catch (e) {
            toast.error(e.response?.statusText || "Error");
            setStatus(SubmitStatus.SUBMIT);
        }
    }

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel htmlFor="language"></InputLabel>
                <Select
                    value={language}
                    onChange={(event) => setLanguage(event.target.value)}
                    inputProps={{
                        id: 'language',
                    }}
                >
                    {Object.keys(LANGUAGE_MAPPING).map((lang) => (
                        <MenuItem key={lang} value={lang}>
                            {LANGUAGE_MAPPING[lang]?.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div className="editor-container">
                <Editor
                    height="60vh"
                    value={code[language] || "//write your code here"}
                    theme="vs-dark"
                    options={{
                        fontSize: 14,
                        scrollBeyondLastLine: false,
                    }}
                    language={LANGUAGE_MAPPING[language]?.monaco || "cpp"}
                    onChange={(value) => setCode({ ...code, [language]: value })}
                />
            </div>
            <div className="flex justify-end">
                <Button
                    disabled={status === SubmitStatus.PENDING}
                    type="submit"
                    className="mt-4"
                    onClick={submit}
                >
                    {status === SubmitStatus.PENDING ? "Submitting" : "Submit"}
                </Button>
            </div>
            <div>{message}</div>
        </div>
    );
}
