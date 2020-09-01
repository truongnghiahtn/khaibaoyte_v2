import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function RadioButton(props) {

  const [Value, setValue] = useState({ option: "" });

  // useEffect(() => {
  //   props.dataradio(Value)
  // }, [Value])
  const onchangeValues = (e) => {

    setValue({ option: e.target.value });
    props.dataradio({

      IDCauHoi: props.data.IDCauHoi,
      CauTraLoi: e.target.value,
    })
  }

  return (
    <div className={`input-group ${false ? "input-err" : ""}`}>
      <h4>
        {props.data.TieuDe}
        {props.data.BatBuoc ? <span> *</span> : ""}
      </h4>
      <FormControl>
        <RadioGroup aria-label="gender" value={Value.option} name="gender1" onChange={onchangeValues}>
          <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Có" />
          <FormControlLabel value="No" control={<Radio color="primary" />} label="Không" />
        </RadioGroup>
        {/* <FormHelperText className={false ? "err-text" : "d-none"}>
          <i className="fa fa-exclamation"></i> đây là câu hỏi bắt buộc
        </FormHelperText> */}
      </FormControl>
    </div>
  );
}
