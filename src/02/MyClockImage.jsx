import clock from "../assets/clock.PNG"

export default function MyClockImage() {
    return (
        <div className="w-full flex justify-center"> 
            <img className="w-2/3" src={clock} alt="시계"/>

        </div>
    )
}