"use client"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
export function CalculForm() {
    const [input, setInput] = useState(0);
    const [input2, setInput2] = useState(0);
    const [result, setResult] = useState(0);
    const num1 = (e: any) => {
        setInput(Number(e.target.value));
    };
    const num2 = (e: any) => {
        setInput2(Number(e.target.value));
    };
    useEffect(() => {
        setResult(input + input2);
        console.log("Result:", result);
    }, [input, input2]);
    

    return (
        <div style={{ padding: "20px" }}>
            <h1>Calculatrice</h1>
            <form>
                <div style={{ marginBottom: "15px" }}>
                    <Label htmlFor="input1">Nombre 1:</Label>
                    <Input
                        id="input1"
                        type="number"
                        value={input}
                        onChange={num1}
                        placeholder="Entrez le premier nombre"
                        style={{ marginLeft: "10px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <Label htmlFor="input2">Nombre 2:</Label>
                    <Input
                        id="input2"
                        type="number"
                        value={input2}
                        onChange={num2}
                        placeholder="Entrez le deuxième nombre"
                        style={{ marginLeft: "10px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginTop: "20px" }}>
                    <strong>Résultat: {result}</strong>
                </div>
            </form>
        </div>
    );
}