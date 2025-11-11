import React from 'react';

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "deecf4f6-a1d7-4f10-a67e-9fba97056951");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    if (data.success) {
      event.target.reset();
    }
  };

  return (
    <div id ="contact" className="w-full px-[125] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">Lets get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">If you have any questions, feel free to reach out!</p>
      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="text" name="name" placeholder="Name" required/>
            <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="email" name="email" placeholder="Email" required/>
        </div>
          <textarea rows='6' name="message" className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' required ></textarea>
        <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">Submit</button>
        <p>{result}</p>
      </form>
    </div>
  );
};

export default Contact;