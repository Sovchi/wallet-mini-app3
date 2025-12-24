const tg = window.Telegram.WebApp;
tg.ready();

const connector = new TonConnectSDK.TonConnect({
  manifestUrl: "https://YOUR_DOMAIN/tonconnect-manifest.json"
});

document.getElementById("connect").onclick = async () => {
  await connector.connectWallet();
};

connector.onStatusChange(wallet => {
  if (!wallet) return;

  const data = {
    address: wallet.account.address,
    publicKey: wallet.account.publicKey
  };

  // ВІДПРАВКА ДАНИХ У БОТА
  tg.sendData(JSON.stringify(data));

  // Закриваємо Mini App
  tg.close();
});
