import React, { CSSProperties, useState } from "react";
import { Popconfirm, Button } from "antd";
import { v4 as uuid } from "uuid";

export interface ConfirmButtonProps {
    title?: string
    okButtonProps?: any
    okText?: string
    cancelText?: string
    onConfirm?: Function
    onCancel?: Function
    disabled?: boolean
    size?: "small" | "middle" | "large"
    type?: "default" | "ghost" | "dashed" | "link" | "primary" | "text"
    buttonText: string
    value?: any
    style?: CSSProperties
}


export default function ConfirmButton(props: ConfirmButtonProps, { key, ...rest }) {
    return (
        <Popconfirm
            title={props.title}
            okButtonProps={props.okButtonProps}
            onConfirm={props.onConfirm as any}
            onCancel={props.onCancel as any}
            okText={props.okText || "OK"}
            cancelText={props.cancelText || "Cancel"}
            key={key}
            disabled={props.disabled}
        >
            < Button key={key || "ConfirmButton__001"} type={props.type || "ghost"}  value={props.value} size={props.size || "middle"} disabled={props.disabled} {...rest} style={props.style}>
                {props.buttonText}
            </Button>
        </Popconfirm>
    )
}