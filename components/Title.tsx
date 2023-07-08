import { useLayoutEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { ANIM_DELAY_1, animFadeInAndCondense } from "styles/animations";
import {
  BREAKPOINT_MOBILE,
  FONT_SIZE_DISPLAY,
  FONT_SIZE_DISPLAY_MOBILE,
} from "styles/themeVariables";

const splitTitle = (title) => {
  const titleSegments = [];
  let buffer = "";
  for (let index = 0; index < title.length; index++) {
    const char = title[index];
    buffer = buffer + char;
    if ((char === " " && buffer.length > 2) || index === title.length - 1) {
      titleSegments.push(buffer);
      buffer = "";
    }
  }
  return titleSegments;
};

const Title = ({ title }: { title: string }) => (
  <TitleElement>
    {splitTitle(title).map((segment) => (
      <TitleSegment key={segment} segment={segment} />
    ))}
  </TitleElement>
);

const TitleElement = styled.h1`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  margin: 0 0 2rem 0;
  position: relative;
  width: 100%;
`;

const TitleSegment = ({ segment }: { segment: string }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const [scale, setScale] = useState<number>(1);

  useLayoutEffect(() => {
    const updateScale = () => {
      const width = ref.current?.clientWidth ?? 0;
      const parentWidth = ref.current?.parentElement.clientWidth ?? 0;
      setScale(Math.min(parentWidth / width, 1));
    };
    window.addEventListener("resize", updateScale);
    updateScale();
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <>
      <TitleSegmentBlock scale={scale}>{segment}</TitleSegmentBlock>
      <TitleSegmentBlock ref={ref} isReferenceElement={true}>
        {segment}
      </TitleSegmentBlock>
    </>
  );
};

type TitleSegmentBlockProps = {
  scale: number;
  isReferenceElement?: boolean;
};

const referenceElementStyles = `
  height: 0;
  left:-10000px;
  opacity: 0 !important;
  position:absolute;
  user-select: none;
`;

const TitleSegmentBlock = styled.span<TitleSegmentBlockProps>`
  ${animFadeInAndCondense};
  animation-delay: ${ANIM_DELAY_1};
  display: block;
  font-size: calc(${FONT_SIZE_DISPLAY} * ${(props) => props.scale});
  line-height: 1.2em;
  transition: font-size 0.3s ease-out;
  white-space: nowrap;
  width: fit-content;
  ${(props) =>
    props.isReferenceElement
      ? css`
          ${referenceElementStyles}
        `
      : ""};

  @media screen and (max-width: ${BREAKPOINT_MOBILE}) {
    font-size: calc(${FONT_SIZE_DISPLAY_MOBILE} * ${(props) => props.scale});
  }
`;

export default Title;
