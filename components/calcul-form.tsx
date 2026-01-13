"use client"
import { useIsCalcul } from "@/hooks/calculatrice"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
export function CalculForm() {
    const calcul = useIsCalcul()

    return (
        <div style={{ padding: "20px" }}>
            <form>
                <div style={{ marginBottom: "15px" }}>
                    <Label>Calculatrice:</Label>
                    <Label style={{ gridColumn: "span 4", marginTop: "10px" }}>Input: {calcul.input}</Label>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginTop: "10px" }}>
                        {[1, 2, 3].map((num) => (
                            <Button
                                key={num}
                                type="button"
                                onClick={() => calcul.handleNumberClick(num)}
                                style={{ padding: "10px", fontSize: "16px" }}
                            >
                                {num}
                            </Button>
                        ))}
                        <Button
                            type="button"
                            onClick={calcul.button1Click}
                            style={{ marginLeft: "0px", padding: "10px", fontSize: "16px", backgroundColor: "#FF9800", color: "white" }}
                        >
                            +
                        </Button>
                        {[4, 5, 6].map((num) => (
                            <Button
                                key={num}
                                type="button"
                                onClick={() => calcul.handleNumberClick(num)}
                                style={{ padding: "10px", fontSize: "16px" }}
                            >
                                {num}
                            </Button>
                        ))}
                        <Button
                            type="button"
                            onClick={calcul.button2Click}
                            style={{ padding: "10px", fontSize: "16px", backgroundColor: "#FF9800", color: "white" }}
                        >
                            -
                        </Button>
                        {[7, 8, 9].map((num) => (
                            <Button
                                key={num}
                                type="button"
                                onClick={() => calcul.handleNumberClick(num)}
                                style={{ padding: "10px", fontSize: "16px" }}
                            >
                                {num}
                            </Button>
                        ))}
                        <Button
                            type="button"
                            onClick={calcul.button3Click}
                            style={{ padding: "10px", fontSize: "16px", backgroundColor: "#FF9800", color: "white" }}
                        >
                            /
                        </Button>
                        <Button
                            type="button"
                            onClick={() => calcul.handleNumberClick(0)}
                            style={{ padding: "10px", fontSize: "16px", gridColumn: "span 2" }}
                        >
                            0
                        </Button>
                        <Button
                            type="button"
                            onClick={calcul.handleEquals}
                            style={{ padding: "10px", fontSize: "16px", backgroundColor: "#4CAF50", color: "white", gridColumn: "span 1" }}
                        >
                            =
                        </Button>
                        <Button
                            type="button"
                            onClick={calcul.button4Click}
                            style={{ padding: "10px", fontSize: "16px", backgroundColor: "#FF9800", color: "white" }}
                        >
                            x
                        </Button>
                        <Button
                            type="button"
                            onClick={calcul.clear}
                            style={{ padding: "10px", fontSize: "16px", backgroundColor: "red", color: "white", gridColumn: "span 4" }}
                        >
                            Clear
                        </Button>
                    </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <strong>Résultat: {calcul.result}</strong>
                </div>
            </form>
        </div>
    );
}