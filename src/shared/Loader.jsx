import { TailSpin } from "react-loader-spinner"

const Loader = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", width: "100%", height: "1000px", marginBlock: "20px"}}>
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#303030"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loader