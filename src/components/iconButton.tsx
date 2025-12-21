import Button, {type ButtonProps} from "./Button";
import React from "react";

// 继承已经定义的所有属性
export interface IconButtonProps extends ButtonProps {
    icon: React.ReactNode;
    iconPosition?: "left" | "right"; // 用于描述图标的位置，?表示可选
}

const IconButton = ({
                        icon,
                        iconPosition = "left",
                        title,
                        ...rest
                    }: IconButtonProps) => {
    return <Button title={
        <span className="flex items-center gap-2">
            {iconPosition === "left" && icon}
            <span>{<title></title>}</span>
            {iconPosition === "right" && icon}
        </span>
    } {...rest}/>
};

export default IconButton;