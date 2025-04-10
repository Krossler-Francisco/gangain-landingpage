const Facebook = (igLink) =>{
    return(
        <a href={igLink} aria-label="Ir a Facebook" target="_blank">
        <svg width="24" height="34" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6347 0H8.4616C7.059 0 5.71385 0.55718 4.72207 1.54897C3.73028 2.54075 3.1731 3.8859 3.1731 5.2885V8.4616H0V12.6924H3.1731V21.154H7.4039V12.6924H10.577L11.6347 8.4616H7.4039V5.2885C7.4039 5.00798 7.51534 4.73895 7.7137 4.5406C7.91205 4.34224 8.18108 4.2308 8.4616 4.2308H11.6347V0Z" fill="black"/>
        </svg>
        </a>
    )
}

export default Facebook;