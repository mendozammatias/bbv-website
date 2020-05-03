export const submitContactForm = async ctx => {
  return await fetch(
    'https://api.hsforms.com/submissions/v3/integration/submit/6416846/7aa678f0-a456-4270-a1f3-f68b1ff70b70',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        context: {
          pageUri: window.location.href,
          pageName: document.querySelector('title').text,
        },
        fields: Object.entries(ctx).map(([name, value]) => ({
          name,
          value,
        })),
      }),
    }
  );
};
