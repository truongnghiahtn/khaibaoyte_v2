import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
export default function Inputuser(props) {
    const [Value, setValue] = useState({ text: "", inputValid: true });
    const [errValue, seterrValue] = useState("");
    useEffect(() => {
        if (!Value.inputValid) {
            seterrValue("Đây là một câu hỏi bắt buộc");
        }
    }, [Value, props]);

    const Onchange = (e) => {

        props.datatext({
            CauTraLoi: e.target.value,
            IDCauHoi: props.data.idName,
            name: e.target.name
        });
        setValue({
            text: e.target.value,
            inputValid: e.target.value ? true : false,
        });
    };
    //

    //
    return (
        <div className={`input-group ${!Value.inputValid ? "input-err" : ""}`}>
            <h4>
                {props.data.cauHoi}
                {true ? <span> *</span> : ""}
            </h4>
            <FormControl err={"false"}>
                <Input
                    onChange={Onchange}
                    error={!Value.inputValid}
                    placeholder="Câu trả lời của bạn"
                    name={props.data.name}
                />
                <FormHelperText className={!Value.inputValid ? "err-text" : "d-none"}>
                    <i className="fa fa-exclamation"></i> {errValue}
                </FormHelperText>
            </FormControl>
        </div>
    );
}
