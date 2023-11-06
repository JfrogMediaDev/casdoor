import React, {useEffect} from "react";

export default function AnalticsScript({analytic_id}) {

  useEffect(() => {
    if (analytic_id === undefined || analytic_id === null) {return;}
    const script = `
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SFJM2F6JLE"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${analytic_id}');
        </script>
      `;
    const container = document.getElementById("gaContainer");
    container.innerHTML = script;
  }, [analytic_id]);

  if (analytic_id === undefined || analytic_id === null) {return;}

  return (
    <div id="gaContainer">
      {/* Script and yahoo pixel */}
    </div>
  );
}
