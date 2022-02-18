import {useState, useEffect} from "react";
function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return num_parts.join(".");
  }
export function InstrumentSinglePage(props) {
    const id=props.match.params.hangszerId;
    const [instrument, setInstrument] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);
        fetch(`https://kodbazis.hu/api/instruments/${id}`, {credentials: "include"})
        .then((res) => res.json())
        .then((hangszer) => setInstrument(hangszer))
        .catch(console.log)
        .finally(() => {
            setPending(false);
        });
    }, []);
    return (
        <div className="p5 m-auto text-center content bg-ivory">
            {isPending|| !instrument.id ? (
                <div className="spinner-border"></div>
            ): (
                <div>
                   
            <div className="card col-sm-3 d-inline-block m-1 p-2">
                <h6 className="text-muted">{instrument.brand}</h6>
                <h5 className="text-dark">{instrument.name}</h5>
                <div>{thousands_separators(instrument.price)} Ft</div>
                <div className="small">Készleten: {instrument.quantity} db</div>
                <div className="card-body">
                    <img 
                    className="img-fluid"
                    style={{ maxHeight: "500px"}}
                    src={instrument.imageURL ? instrument.imageURL : "https://via.placeholder.com/400x800"} alt={instrument.name}
                    />
                </div>
                </div>
                
                
                </div>
            )}
        </div>
    );
}
