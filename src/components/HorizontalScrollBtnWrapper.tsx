import { Box, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { LeftScrollBtn } from "./LeftScrollBtn";
import { RightScrollBtn } from "./RightScrollBtn";
interface Props {
    item: JSX.Element;
}
function HorizontalScrollBtnWrapper({ item }: Props) {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [rightBtnVis, SetRightBtnVis] = useState<boolean>(true);
    const [scrollLeft, SetScrollLeft] = useState<number>(0);
    const [LeftBtnVis, SetLeftBtnVis] = useState<boolean>(false);

    const scroll = (scrollTo: "left" | "right") => {
        if (scrollRef.current) {
            const val = scrollRef.current.clientWidth || 0;
            if (scrollTo === "right") {
                SetScrollLeft((prev) => prev + val);
            } else {
                SetScrollLeft((prev) => prev - val);
            }
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft;
            console.log(scrollLeft);
            if (
                scrollRef.current.scrollWidth <=
                scrollRef.current.offsetWidth + scrollLeft + 2
            ) {
                SetRightBtnVis(false);
            } else {
                SetRightBtnVis(true);
                scrollLeft ? SetLeftBtnVis(true) : SetLeftBtnVis(false);
            }
        }
    }, [scrollLeft, item]);

    return (
        <>
            <RightScrollBtn scroll={scroll} visibity={rightBtnVis} />
            <LeftScrollBtn scroll={scroll} visibity={LeftBtnVis} />
            <Container ref={scrollRef}>
                {item}
            </Container>
        </>
    );
}

const Container = styled(Box)(({ theme }) => ({
    overflowX: "auto",
    display: "flex",
    scrollBehavior: "smooth",
    "::-webkit-scrollbar": {
        height: "0.5rem",
    },
    flexWrap: "nowrap",
}));

export default HorizontalScrollBtnWrapper