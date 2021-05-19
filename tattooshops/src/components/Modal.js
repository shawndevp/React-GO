import React, {useState} from 'react'
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
        mobile: null,
      };
    
      const [modalIsOpen, setIsOpen] = useState(false);
      const [formValues, setFormValues] = useState(initialValues);
      const [bookedArtist, setBookedArtist] = useState();
    
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
          userId:"",
          artistId:
        })

        console.log(response)

      }

    return (
        <>
                <button onClick={openModal} className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                BOKA
              </button>
              {/*               </Link> */}
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
                <button onClick={closeModal}>close</button>
                <div>Du väljer att boka {bookedArtist}</div>
                <form onSubmit={onHandleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={onHandleChange}
                  />
                  <input
                    type="text"
                    name="time"
                    value={formValues.time}
                    onChange={onHandleChange}
                  />
                  <input
                    type="number"
                    name="mobile"
                    value={formValues.mobile}
                    onChange={onHandleChange}
                  />
                  <button type="submit">Send</button>
                </form>
              </Modal>  
        </>
    )
}

export default ModalComponent
