import React, {useState, useEffect} from 'react'
import Modal from "react-modal";
import axios from "axios";

function ModalComponent() {

    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      };
    
      const initialValues = {
        name: "",
        time: "",
        mobile: "",
      };
    
      const [modalIsOpen, setIsOpen] = useState(false);
      const [formValues, setFormValues] = useState(initialValues);
      const [bookedArtist, setBookedArtist] = useState();
      const [artistId, setArtistId] = useState();
      const [userId] = useState(localStorage.getItem("userId"));
      const [token] = useState(localStorage.getItem("jwt"))

      useEffect (()=> {
        if(modalIsOpen === true) {
        const fetchArtist = async()=>{
        const response = await axios.get(`http://localhost:1337/artists?name=${bookedArtist}`)
        setArtistId(response.data[0].id)
        }
        fetchArtist()
        }
        },[openModal])
    
      function openModal(e) {
        setBookedArtist(e.target.parentNode.previousSibling.previousSibling.previousSibling.innerHTML)  
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    
      function onHandleChange(e) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      }
    
     async function onHandleSubmit(e) {
        e.preventDefault();

        const response = await axios.post("http://localhost:1337/bookings", {
          name:formValues.name,
          time:formValues.time,
          mobile:Number(formValues.mobile),
          users_permissions_user:userId,
          artist: artistId
        },
        {
          headers: {
           Authorization:
             `Bearer ${token}`,
         },
       }
        )
        console.log(response)

      }

    return (
        <>
                <button onClick={openModal} className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                BOKA
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="text-red-500">
                <button onClick={closeModal}>CLOSE</button>
                </div><br/>
                <div>You're currently about to book {bookedArtist}</div><br/>
                <div className="flex justify-around text-black font-black">
                  <h1>Name</h1>
                  <h1>Time</h1>
                  <h1>Mobile</h1>
                </div>
                <form onSubmit={onHandleSubmit}>
                  <input
                    className="placeholder-gray-500 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="yourname"
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={onHandleChange}
                    required
                  />
                  <input
                    className="placeholder-gray-500 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="14:00 etc"
                    type="number"
                    name="time"
                    value={formValues.time}
                    onChange={onHandleChange}
                    required
                  />
                  <input
                    className="placeholder-gray-500 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="071-2345678"
                    type="number"
                    name="mobile"
                    value={formValues.mobile}
                    onChange={onHandleChange}
                    required
                  />
                  <br/>
                  <br/><div className="flex justify-end text-green-500">
                  <button type="submit">Send</button>
                  </div>
                </form>
              </Modal>  
        </>
    )
}

export default ModalComponent
