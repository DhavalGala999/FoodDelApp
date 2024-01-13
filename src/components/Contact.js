const Contact = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl p-4 m-4">Contact Page</h2>
      <form action="">
        <input
          type="text"
          placeholder="name"
          className="p-2 m-2 border border-black"
        />
        <input
          type="text"
          placeholder="message"
          className="p-2 m-2 border border-black"
        />
        <button className="rounded-lg p-2 m-2 bg-gray-300">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
