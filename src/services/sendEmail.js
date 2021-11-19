const sendEmail = async ({ name, email, description }) => {
  try {
    const resp = await fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ name, email, description }),
    });

    if (!resp.ok) {
      const message = `Status: ${resp.status} - Message: ${resp.statusText}`;
      throw new Error(message);
    }

    return await resp.json();
  } catch (error) {
    return error;
  }
};

export default sendEmail;
