import styled from "styled-components";
import { QUERIES } from "../../../utils/mediaQueries";


export const Container = styled.div`
    max-width: min(90%);
    margin: auto;
    padding: 1rem 0;

    @media ${QUERIES.desktop} {
        max-width: min(90%);
    }
`;