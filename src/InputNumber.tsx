import { InputNumber } from 'antd';
import { createElement, useCallback, useEffect, useState } from "react";
import { InputNumberContainerProps } from "../typings/InputNumberProps";
import { ValueStatus } from 'mendix';

import './ui/index.scss';
import Big from 'big.js';

export default function (props: InputNumberContainerProps) {
    const [value, setvalue] = useState<Number>();
    useEffect(() => {
        if (props.attribute && props.attribute.status === ValueStatus.Available) {
            setvalue(Number(props.attribute.value));
        }
    }, [props.attribute]);

    const onChange = useCallback(
        (e: number) => {
            if (props.attribute) {
                props.attribute.setValue(new Big(e));
            }
        },
        [props.attribute],
    )

    return <InputNumber
        value={value}
        defaultValue={0}
        step={0.01}
        min={0}
        max={1}
        formatter={(value: any) => `${value * 100}%`}
        parser={(value: string) => Number(value.replace('%', '')) / 100}
        onChange={onChange}
    />;
}
