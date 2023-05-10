// @desc get all contacts 
// @route Get /api.
const asyncHandler = require("express-async-handler");
const Contact = require("../model/contactModel");


const getContacts =asyncHandler(async (req,res)=>{
    const Contacts = await Contact.find({user_id: req.user.id}) 
    res.status(200).json(Contacts);
})

const createContent=asyncHandler(async(req,res) =>{
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status();
        throw new Error("All fields are mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    })
    res.status(201).json(contact)
})


const getContact =asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact)
})

const updateContact =asyncHandler(async (req,res) => {
    const connect = await Contact.findById(req.params.id);
    if(!connect){
        res.status(404);
        throw new Error("Contact not found")
    }

    if(connect.user_id.toString() !== req.user.id){
        res.status(404);
        throw new Error ("User dont have permission to update other user contacts")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedContact)
})
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(contact);
  });
  
module.exports = {

     getContacts,
     createContent,
     getContact,
     updateContact,
     deleteContact
    
    };