import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // You will need to change this URL to your APISIX Gateway URL
  const API_URL = "https://docker2.devops.esc.yipintsoigroup.com/test/api";

  const handleFetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        credentials: 'include',

      });
      console.log("response status= " + response.status)

      if (response.status === 401 || response.status === 403) {
        // redirect user ไปหน้า login ของ Casdoor
        window.location.href = "https://docker2.devops.esc.yipintsoigroup.com/test/api";
        return;
      }

      if (!response.ok) {
        //throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);

    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };


  const renderData = () => {
    if (loading) {
      return <div className="text-gray-500">Loading...</div>;
    }
    if (error) {
      return <div className="text-red-500">Error: {error}</div>;
    }
    if (data) {
      return (
        <pre className="mt-4 p-4 bg-gray-100 rounded-md">
          {JSON.stringify(data, null, 2)}
        </pre>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">APISIX OpenID Connect Demo</h1>
        <p className="text-gray-600 mb-6">
          Click the button to access the protected API. APISIX will handle authentication via Casdoor.
        </p>
        <button
          onClick={handleFetchData}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Fetch Protected Data'}
        </button>
        {renderData()}
      </div>
    </div>
  );
};

export default App;