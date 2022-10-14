export const CommonHover = `
a.underline-hover-effect {
    text-decoration: none;
    color: inherit;
    }

.underline-hover-effect {
    display: inline-block;
    padding-bottom: 0.25rem;
    position: relative;
    }

.underline-hover-effect::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    transition: width 0.25s ease-out;
    }
    .underline-hover-effect:hover::before {
    width: 100%;
    }
}
`