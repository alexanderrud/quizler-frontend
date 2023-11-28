import {ChangeEvent} from "react";

export type AuthInputProps = {
    type: string,
    id: string,
    name: string,
    value?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}