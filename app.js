<button id="connect">Connect TON</button>
<script src="https://cdn.jsdelivr.net/npm/@tonconnect/sdk@1.2.0/dist/tonconnect.umd.js"></script>
<script>
  const tonConnect = new TonConnect({
      manifestUrl: "https://sovchi.github.io/wallet-mini-app3/tonconnect-manifest.json"
  });

  document.getElementById("connect").onclick = async () => {
      try {
          const wallet = await tonConnect.connect();
          // Відправляємо адресу боту через Telegram WebApp
          Telegram.WebApp.sendData(JSON.stringify({ address: wallet.account.address }));
      } catch (e) {
          console.error(e);
          alert("Failed to connect wallet");
      }
  };
</script>
