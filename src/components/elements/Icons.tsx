export const Eye = (props: { w?: string, h?: string, c?:string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.w || '24'} height={props.h || '24'} stroke={props.c || 'currentColor'} fill='none' viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    )
}