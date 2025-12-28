import { useContext, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Context, ContextType } from "../context/store";

export const useSectionInView = (sectionName: string, amount: number = 0.4) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount, margin: "-10% 0px -10% 0px" });
    const { setSelectedSection, selectedSection } = useContext(Context) as ContextType;

    useEffect(() => {
        if (isInView) {
            setSelectedSection(sectionName);
        }
    }, [isInView, sectionName, setSelectedSection]);

    return { ref };
};

