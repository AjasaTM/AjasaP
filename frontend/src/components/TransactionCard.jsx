import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function TransactionCard(props) {
  const { addressTo, addressFrom, timestamp, message, keyword, amount, url } = props;
  const [gifUrl, setGifUrl] = useState(null);

  useEffect(() => {
    async function fetchGifUrl() {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${keyword}&limit=1`);
      const data = await response.json();
      const gif = data.data[0]?.images.original.url;
      setGifUrl(gif);
    }

    fetchGifUrl();
  }, [keyword]);

  const shortenAddress = (address) => {
    const prefix = address.slice(0, 6);
    const suffix = address.slice(-4);
    return `${prefix}...${suffix}`;
  };
  

  return (
    <div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] min-w-full flex-col p-3 rounded-md hover:shadow-2xl">
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-white text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
          <img src={gifUrl || url} alt="nature" className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover" />
          <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
            <p className="text-[#37c7da] font-bold">{timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

TransactionCard.propTypes = {
  addressTo: PropTypes.string.isRequired,
  addressFrom: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  message: PropTypes.string,
  keyword: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default TransactionCard;
