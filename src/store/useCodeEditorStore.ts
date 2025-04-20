import { LANGUAGE_CONFIG } from "@/app/(root)/_constants";
import { Monaco } from "@monaco-editor/react";
import { create } from "zustand";
import { CodeEditorState } from "../types"

const getInitialState = ()=>{
    if(typeof window == "undefined") {
        return {
            language : "javascript" ,
            fortSize : 16,
            theme : "vs-dark"
        }
    }

    const savedLanguage = localStorage.getItem("editor-language") || "javascript" ;
    const savedTheme = localStorage.getItem("editor-theme") || "vs-dark" ;
    const saveFont = localStorage.getItem("")

}

export const useCodeEditorState = create<CodeEditorState>((set , get)=>{
    const initState = getInitialState()
    return {


    }
})