
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import React from "react";

export const Cursor = ({ hover }) => {

    const cursorRef = useRef(null);
    const ctx1 = useRef(null);
    const cursorSize = 30;
    const mouseMovehandler = (e) => {
        const { clientX, clientY } = e;
        ctx1.current.mouseMove(
            clientX - cursorSize / 2,
            clientY - cursorSize / 2
        );
    };

    useEffect(() => {
        ctx1.current = gsap.context((self) => {
            const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.6, ease: "slow" });
            const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.6, ease: "slow" });
            self.add("mouseMove", (x, y) => {
                xTo(x);
                yTo(y);
            });
            const scaleTween = gsap.to(cursorRef.current, {
                scale: 1,
                duration: 0.08,
                paused: true,
            }).reverse();
            self.add("grow", (value) => scaleTween.reversed(!value));
        });
        window.addEventListener("mousemove", mouseMovehandler);
        return () => {
            ctx1.current.revert();
            window.removeEventListener("mousemove", mouseMovehandler);
        }
    }, []);

    useLayoutEffect(() => {
        ctx1.current && ctx1.current.grow(hover);
    }, [hover]);
    return (
        <div ref={cursorRef} className="cursor"> </div>
    )
}
