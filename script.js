// =======================
// 1. Datos: equipos, país, escudo
// =======================

const teamsData = [
  // POT 1
  { name: "Bayern Munich", pot: 1, country: "GER", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwpBX3M58eNcmxrrpZyG3xNiKCAcyE5uYE35Le-7ckScNFSlp9wnIIuzioTqJrgQ87UmkwBYr2R-1O4vUwPzXO_q60BNlSHvs0qWN8oguVu1ZlDjuiL8WC7PX2ufB2IoaiiBN_aoqBc3x4-K0lBglX1rXTQ9tKQso8dOZdNGzk_8iQBP93UWHxAhCYNMI/s512/FC%20Bayern%20Munchen.png" },
  { name: "Real Madrid", pot: 1, country: "ESP", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAU4Hsoyj21D28MnDExAqGaDbBU-MOEd2Fh9iF9p2dGQtKTvSteVSFtYXaztZsPpJuPlgqYjDguGTSUJRG8u0uMEscEjOQFCQVFfrGVhfy5dg4qxZmgqLQqdM3bkxODqXkce0u14sr5sk/s1600/Real+Madrid+CF.png" },
  { name: "PSG", pot: 1, country: "FRA", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMbVmT0vg94b9ZaYZvTxI8NVuD2z4mylTrAwj-1AmK7bqaDwHYVr9hteeLmidE68cmPfGTB_g3vnan4y5IcaK-vqXSPpEV6fczPgJs2mMpVYAT__F7lTAQ3mfgryMCTp6Y-AaVOZ0O0mUf/s1600/Paris+Saint+Germain.png" },
  { name: "Liverpool", pot: 1, country: "ENG", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIi419xRzYXAyuVyZdbltTy66TnymGqgI1YLKASnnh3TNcfBznuFnxarAT99d6AyfgTtCUAYQ7QDUKbxYpvems2uo19hJPT52nhfSGby0ArkZAS_vZe-6mKRkP-qtOEWPBX2QT9Yoi9aqi7rW-pfGXxnlGEsO4YfIUqYSdqo-iN-1plcoQWTwpLc39DU4/s512/LIV.png" },
  { name: "Inter", pot: 1, country: "ITA", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfT_vwHFHyKVnUD4kSDhrm41uMQRm3E9shzp-BfCstC1w94uhcBpNF9dvW4UIOYWNwB8QA6YTFwrgDvUelzqS5HM7YazW2EgbukOckHtEy8jA86xtNihjORwl1TVRoHkj3pHJGs9BDAiA/s512/FC+Internazionale.png" },
  { name: "Manchester City", pot: 1, country: "ENG", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0su_nv05pM0YMgNg9uU9MTjEhwhG4RslvQLDaAzzCWcUn4GKyJEvML6nupVC6Mpg87RV0FbPQISxIZhYTSfFeYirkrAk158GRZtFka1bNXSEYs1Zt0SzxV-VtLLu8Z1hCgMhvp1mn5W8v/s1600/Manchester+City+FC.png" },
  { name: "Arsenal", pot: 1, country: "ENG", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJ1ZtTA7ghku0ZpyNRnt907guL-aKotIFjJw9rOUKkmZVbEARUB9pAauNbIBSGCJy0MOGb9bUHhoIy13T4v85QWd0sCDXYypTsuS3aRK8Rr8kbmCdah2iwEDj__Ze8GxGltriCAgEvj85aZdzohvII79lRUUbAFIIKnCTa9BgmsuCiq4lWWiD2dxQydpQ/s512/Arsenal%20FC.png" },
  { name: "Barcelona", pot: 1, country: "ESP", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4xprb5TfHqTe6hCvl4hiV6pdlgPfiG_722ZGkfNOPbK1K7bWrklpdZ2wMR_qvSuCSpXuLKMSGAH7IhB9PY61vG5ctNQ4-R-Je18Uq5-oYEN8pfP0z7c7-EtQE_gjr-iDR2D3t6F26mr8/s512/FC+Barcelona.png" },
  { name: "Atlético Madrid", pot: 1, country: "ESP", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi67zm7JRRfPpriax9MwQL7RBsGMk9CcGapA6YQSUeXjwAwBhkxZayvdhn7uiz9WM9lhE6TxBG6f_87TO9Yiy-sVeIiFHAa0wZHOIWTtA-tIGyY8xyCmgpdrJnW5xkfI6xVUrHGamPwopSV1sZColeZHvmXmWVtszTP_jvj_9d5IfyorIkXNfltBl0FLMQ/s512/Club%20Atl%C3%A9tico%20de%20Madrid.png" },

  // POT 2
  { name: "Borussia Dortmund", pot: 2, country: "GER", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUYvkwZu9ejy1iNha9QSBbkFluWjs1yLGGdYWJMiYsMp9UTF6d6XwLqlXoCzcluNlKQB4YwIm-l-MQkbvGclpx7BbWyLuehWSW-t0d6yiMHM2q7k4P4-h8Y9mtzTTN6CJ37HiXxKrDlf-6/s1600/Borussia+Dortmund.png" },
  { name: "Sporting CP", pot: 2, country: "POR", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc1U0TbzWcoirWEA0eZ9vu9u8CxNlSkOHzpL3Edl4b8VaTt4VruPWRKcyus0Tyr_RwzxxsaR6btmYie4XPlLKs55xC0vgxP9Hf4tKbbljT0UTYFBTN6334o0UIk12adROZIXDoVZSSOrgEJqbuvQBcSbxzIoNEyqo0ZWGp7KXU-HWLRh3l2XJPkTfPW7I/s512/Sporting%20CP.png" },
  { name: "Aston Villa", pot: 2, country: "ENG", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyS6lMAfxmmjQkW18x3HP81DIsxW1fxeJfi_XZ02UabGf9daxqNxAvuw8OqAZLTdmNsgU0OVaXEolX4AcqkNHEpYxTDAYrHGI4TS7wn6r8P0-7UBwNfJPTeYwWqEJjR6DqJi2XjrzoD_Xbtnfy9WnNMP5sroWyixwDpZPCJso1vYmqBDFLQIVzcY3-y6A/s512/Aston%20Villa%20FC.png" },
  { name: "Porto", pot: 2, country: "POR", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoTmPLtJfaerrJP2jCJpLZlSKrz1EtmRaLPIz94EheCVzAMAhuWCkMJoqfPPhfYjufXN3U49hCHKJ4W1AM8xCCAZc23_mwAL4qHqj_0WxJ_4Jo0bMmiXPQCcvyo_DhO92fRYYrbFbRe6PjD0aQi_eu_WB2MFtzZEF8Ec_vx29USBPWZ_tu1qel-nETbJk/s512/FC%20Porto.png" },
  { name: "Manchester United", pot: 2, country: "ENG", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9YExdW3I2rugp21CLvyTvAwStk9JpRkThyphenhyphen4PNO_slhHbvSPj54sTHl69WsUju9f-Z4CIEI28F-3WWU0-LLYSZsA4bpwph3wPGc-D-OLWp7WX3rvW7APlrX1BR9A5M0JUMCJ_IR6maiM1U/s1600/Manchester+United+FC.png" },
  { name: "Club Brugge", pot: 2, country: "BEL", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpcqi9XJrfYYV-MBKICJaT7wR_NPvKVOSf6WF4LNboqaB3icVtNaJHh9EQR56T9zU37__qVPr5tLOV2Sx4sqASr8p9UyhaRj_IePfNfcfuq8d1mgToIqfNpfRBVXVVnM0cP9VGSQxFXftn/s1600/Club+Brugge+KV.png" },
  { name: "Real Betis", pot: 2, country: "ESP", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgS-hcHIbRSkm6mXj_e1efe4Srp-QjUfyWxFkuiJyI3RBGZn9LGEqWa4rcesmYAaR1utMEkXpwlcYAXXr2FElxTWVLdAJBSM0P2GSkUMBt3b6JfRI_-1aAAWzfLL5JPc0BZkOl4A6FhhaihC4k7FSqg-egL9hCtSnC4xf10h--nRPPHtZt8zUllwq_Q/s512/Real%20Betis.png" },
  { name: "Juventus", pot: 2, country: "ITA", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijvPgGNIhpUSrPvZ20qIKfb0nDOvumcBVC6H4lvOYdiv8maO9GfQktBUaNHHvp-FBG-To-Du6bvEPPjqXmWqnSeFCogjv_j3sb57AoQ0GQyBBc_rNC4mpS02Vi2OCKRtKMh-zlRkElFrM/s512/Juventus+FC.png" },
  { name: "PSV", pot: 2, country: "NED", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9yjkPz-XRYg7k_7CJd0IeeGBd7y3-4zwNoaf7InYe26zL8DvvtbaGF9V97n3B8dbitB2G0OYet7SAoBEOcPWgOjzAGan2RnW3VBa6vZLFxzetHfCZ0KFCUqIlj7pk-m4kj0_flLuWygs/" },

  // POT 3
  { name: "Feyenoord", pot: 3, country: "NED", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5nEdlRd8bO6oWDhvMrLXBm5HXXcmlHuGaARa8uLEBNNcTXIEFcJgKXSd7blfwXyPVjqqtTPU4qjRbDe1TxDhDM9_J5GXb9cyDR9vgyXciHo-XswemuA8776v4whu2jAhXVakbcHD1ywfUFH8KCbco6lcxQusbfZeU6_GvuqF2wvTxnGsf9qfCfT73Qx8/s512/Feyenoord%20Rotterdam.png" },
  { name: "Lille", pot: 3, country: "FRA", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0IbapX_EGjQ6DmG9VXzN3qhn5M6YAXUKBhrf10E9DDOuOlrs3BCGcvZhmPMl7G7Fp8zOGeOy2lIrDoRkKakpal6F2oygDSHGzECc_C58z0Lrz0fSs0hcs-gKrhRyGcquKwGQJ4xCh_i8/s1600/Lille+LOSC.png" },
  { name: "AC Milan", pot: 3, country: "ITA", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsJuJC34cv4mN5M6Wp15qwgN6OFl1YDJJPyst6CohQHhP8vb_HtfeOMmJJRmpkGFdhAAD2GI5-Ws2VK9i2JTL0qwcFjFo4OYml29CvXxhlUeMl24vVO1Xy4Fb27kq36_zlk_NGzBIlFy8/s1600/AC+Milan.png" },
  { name: "Lyon", pot: 3, country: "FRA", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiojUdyknYTq3DMsNpYUSiuRhrHsuUPQHMl6zTAtJDHzt83Yw2_88a-76pTvvQp0kvaFoj_dtCgBTxa7MlpxA6MioLmW1ZwzcHAfy3alqbp6eF02vUUg5Rx7PSeAOCS2dS5GDoqxY7LTBzbouMiJHUap4lZCisTesvfQQYbVtanCOuDF7ddl6IiYMyk/s512/Olympique%20Lyonnais.png" },
  { name: "Napoli", pot: 3, country: "ITA", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc3JI7EmgaCKxKsb4veIsuyQook10BekqDVA1w5IdIQwzC7Ne-8IxwT35gE5gZdLjeloKEozyAgAfO9DRxdxigmE40fUO03AY3GGOVSp1bxKC6JoVtoGUDXjJNtHhKTqQh79-ny5QM9xSHzxKwNhuIvUo0942rm5jjJAszYBlKm1fpBUsLA-cLM4yuIEg/s512/Napoli.png" },
  { name: "Leipzig", pot: 3, country: "GER", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuW5bGlDpIg2XwPx0jddfTweiuEXcvrX6cN_NieKyD4LgVue_25FVyWo82uon5wEjKCpMxOvKJkl-fMID4DI6da1VXyl0S6N3Q_vzJVZYDJECnTjPIlKGsokyDbF_npOs1W7DfDJKhUHg/s512/RB+Leipzig.png" },
  { name: "Villarreal", pot: 3, country: "ESP", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip_9iJ5rOxCFIMg8IZyqgP4N7hqRmFzrp9gfhTGbRQwQo878o3vaLs9eHdo-8FVhi4QZePam9AThbb1zNt04j7rQbK45gHy0fv4-4VFm7w221QREgMP7ytlOGaKjScAuDRhqu0UWH5EJ2e/s1600/Villarreal+CF.png" },
  { name: "Shakhtar Donetsk", pot: 3, country: "UKR", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxqQoi4lOLj5mhyphenhyphenoQIOeaznUIIxJP3c_PZC-sFANbkHs92LM2lONpeuOxFl24mRBLKJyj7it56BCKb0psIEW5WFK_Bbb9b8AF8WIebYbdek88DlhAHNvNoAk2yZGV9mTkI6kw42-wZJB4/s1600/FC+Shakhtar+Donetsk.png" },
  { name: "Galatasaray", pot: 3, country: "TUR", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjObWFs_oOMSZtydc0S4MAeR3QqzRPg9n2pquvxxS8s-Z-OjI1Af6SbSaRIT2qOGz_mHyF2pPknjVAOdKP7nBnZenRiIRoxo9LAq1t_w3dBPJU7xSspWj2c57-uJrxiLnAbQQoajPKd0bc1ycVh6KwtScvgpM-wDjHBEXgpG_OYk5V1-9655K7zK4REFGM/s512/Galatasaray%20SK.png" },

  // POT 4
  { name: "Crvena Zvezda", pot: 4, country: "SRB", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjg49lQBX6VxO_6AIfOOX__5HywCzhwMUugvmUFk6iQCz7MxbbQosMxby9C9lD_-ZJ-9Yt7OdkHQbVdi6WcKmr9_DahkWJK-6aRIgsVAK_2Zknwe__I15YSG0zvi44mwApNiT90nlgv0Oc/s1600/Estrella+Roja+de+Belgrado.png" },
  { name: "Dinamo Zagreb", pot: 4, country: "CRO", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTeGqMHt4hdXcPAKOJM21vf3C_qWOV5xhpTR9MjxJQuTeVCvaubwCK3KmERIzDHCcO2tjOYnqqWYdXwJ75EbrZPRVPjFxXTNxCTgkVPJaayjixpCx8WhENzDDvgR5VQcVHslMffTBMsAU/s1600/GNK+Dinamo+Zagreb.png" },
  { name: "Slavia Praha", pot: 4, country: "CZE", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfEoJeXh6Nl7gGY1kaLBiex_L1dM_PoGjHFJ2TXR2lE4KLvo21DzNYysRwCRsUqra0f_AS4SChj4zjPgj23WvMtBSz-ZG2_Ia2a5wniCg4tDt9SfWFKdvndg2z41ohScDOLhRN_Xq0w7FzuKgzBDLxELnQkJEuv2mt2smoYhTwhthx1zgGbRzONk4Q/s512/SK%20Slavia%20Praha.png" },
  { name: "AEK Athens", pot: 4, country: "GRE", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQ8t2jY5NhnX1uIn8Dh0Kz3PKjFmXCgmV2-puVPGZovsO5mhJl6NhMig5FwIdcU_4Oz2vllrs-ME578XvBdKW4HzWhwXN0mn2q7O6Od8ohEDZpET9FbcrePRLCc_8FSlg-n9zCbPRXP68/s512/AEK+FC.png" },
  { name: "Bournemouth", pot: 4, country: "ENG", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisVXBT25uohq9CPEhc-N6bzM5F8n14LaphCFjVxNhqQbtC90iV2vu-NSQY3SBEXoFLoF1pYLZPS0fEo8Gh3hEw5NAnatIzqDLxTTrd7g1wUvbE9quVhgVM2DMvU-4tj7rY5X-OVh5gGdPy/s1600/AFC+Bournemouth.png" },
  { name: "Stuttgart", pot: 4, country: "GER", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0FjCc7ViA9yQhPyP8nX3olfICAU__ivwRIip6Or4Uwv13bRFE1O7XZ72-Cif6fVtFRdVYwlpCdOlzMbRzeN0pzAI-vxK5mqynNUutF3vijO5A3587FpsxM75yzOrbZhZRUGxta2WxKdWh/s1600/VfB+Stuttgart.png" },
  { name: "Omonoia", pot: 4, country: "CYP", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7SbCTqIRkfWDSuBnV1IgPX_CcbvLhSRJ3Q91JDdDkzXCBvS_xUrUBH4rZvYd1VYwnDcs-EMd-XSKy4yo6JZsPUwWpa1p0ihyKQ0S1fDzn_vv8jv0hJVLkW4oBfmmWanKurPx6QVhka6Y/s512/AC+Omonia.png" },
  { name: "RC Lens", pot: 4, country: "FRA", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGFl1EfFKkHByDHyEcD8u17zrp_tjULr2TPMn-6N6uH-A7xcB3gm0WZyK83PtINZUWe-E3QM7SeKr21wfJl5JhwrW0Bl0s6ne6_7_XqxPbUgHU5wT6GMbT8XhyL30KCTQ4pJcpFoRjdS_m/s1600/Racing+club+de+Lens.png" },
  { name: "Viking", pot: 4, country: "NOR", crest: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVpJpecHuICygvS2qJtiW9Jvi4IoD690uT_0ggumCqwtZ3LlK7xnLT3yr0k2ws6dWV8YyRo32gmN4gGimiglhDFAU4KQ2AuWHt9-oh5qGA8ajmJL-28QyeJr9Io41t-j7O6bdmt_KnrKA/s512/Viking+FK.png" }
];

let teams = [];
let matches = [];
let standings = {};
let rivalsByTeam = {};


// =======================
// Utilidades
// =======================

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}


// =======================
// Inicializar equipos
// =======================

function initTeams() {
  teams = teamsData.map((t, idx) => ({
    id: idx,
    ...t
  }));
}


// =======================
// SORTEO CORREGIDO (2 por bombo + sin mismo país)
// =======================

function generateSchedule() {
  matches = [];
  rivalsByTeam = {};
  const countByTeamAndPot = {};

  // Inicializar estructuras
  teams.forEach(t => {
    rivalsByTeam[t.id] = new Set();
    countByTeamAndPot[t.id] = {1:0, 2:0, 3:0, 4:0};
  });

  // SORTEO GLOBAL POR BOMBO
  for (let targetPot = 1; targetPot <= 4; targetPot++) {

    let safety = 0;
    let changed = true;

    while (changed && safety < 5000) {
      changed = false;
      safety++;

      for (const A of teams) {
        const potA = A.pot;

        // A necesita rivales del bombo targetPot
        if (countByTeamAndPot[A.id][targetPot] >= 2) continue;

        // 1) Intentar SIN mismo país
        let candidates = teams.filter(B =>
          B.pot === targetPot &&
          B.id !== A.id &&
          !rivalsByTeam[A.id].has(B.id) &&
          countByTeamAndPot[B.id][potA] < 2 &&
          B.country !== A.country
        );

        // 2) Si no hay candidatos → permitir mismo país
        if (candidates.length === 0) {
          candidates = teams.filter(B =>
            B.pot === targetPot &&
            B.id !== A.id &&
            !rivalsByTeam[A.id].has(B.id) &&
            countByTeamAndPot[B.id][potA] < 2
          );
        }

        if (candidates.length === 0) continue;

        shuffle(candidates);
        const B = candidates[0];
        const potB = B.pot;

        // Emparejar mutuamente
        rivalsByTeam[A.id].add(B.id);
        rivalsByTeam[B.id].add(A.id);

        countByTeamAndPot[A.id][potB]++;
        countByTeamAndPot[B.id][potA]++;

        changed = true;
      }
    }
  }

  // Normalizar simetría por si acaso
  for (const A of teams) {
    rivalsByTeam[A.id].forEach(Bid => {
      if (!rivalsByTeam[Bid].has(A.id)) {
        rivalsByTeam[Bid].add(A.id);
      }
    });
  }

  // Crear partidos (ida)
  const partidos = [];

  for (const team of teams) {
    rivalsByTeam[team.id].forEach(rivalId => {
      if (team.id < rivalId) {
        const local = Math.random() < 0.5 ? team.id : rivalId;
        const visitante = local === team.id ? rivalId : team.id;

        partidos.push({
          home: local,
          away: visitante,
          jornada: null,
          gh: null,
          ga: null
        });
      }
    });
  }

  matches = partidos;

  assignJornadas();
}







// =======================
// JORNADAS (1 partido por equipo por jornada)
// =======================

function assignJornadas() {
  // Reiniciar jornadas
  matches.forEach(m => m.jornada = null);

  // 8 jornadas vacías
  const jornadas = Array.from({ length: 8 }, () => []);

  // Para saber si un equipo ya juega en una jornada
  const used = {};
  teams.forEach(t => used[t.id] = Array(8).fill(false));

  // Copia de partidos
  let edges = [...matches];

  // ORDENAR para estabilidad (muy importante)
  edges.sort((a, b) => (a.home + a.away) - (b.home + b.away));

  // PRIMERA PASADA: greedy estable
  for (const p of edges) {
    for (let j = 0; j < 8; j++) {
      if (!used[p.home][j] && !used[p.away][j] && jornadas[j].length < 18) {
        jornadas[j].push(p);
        used[p.home][j] = true;
        used[p.away][j] = true;
        p.jornada = j + 1;
        break;
      }
    }
  }

  // SEGUNDA PASADA: recolocar partidos sin jornada
  const sinJornada = edges.filter(p => p.jornada === null);

  for (const p of sinJornada) {
    for (let j = 0; j < 8; j++) {
      if (!used[p.home][j] && !used[p.away][j] && jornadas[j].length < 18) {
        jornadas[j].push(p);
        used[p.home][j] = true;
        used[p.away][j] = true;
        p.jornada = j + 1;
        break;
      }
    }
  }

  // TERCERA PASADA: si aún queda alguno, intercambiamos
  const restantes = edges.filter(p => p.jornada === null);

  for (const p of restantes) {
    for (let j = 0; j < 8; j++) {
      if (jornadas[j].length < 18) {

        // buscar partido intercambiable
        const candidato = jornadas[j].find(x =>
          !used[p.home][j] && !used[p.away][j] &&
          (!used[x.home].some(Boolean) || !used[x.away].some(Boolean))
        );

        if (candidato) {
          // sacar candidato
          jornadas[j] = jornadas[j].filter(x => x !== candidato);
          used[candidato.home][j] = false;
          used[candidato.away][j] = false;

          // meter p
          jornadas[j].push(p);
          used[p.home][j] = true;
          used[p.away][j] = true;
          p.jornada = j + 1;

          // recolocar candidato
          for (let k = 0; k < 8; k++) {
            if (!used[candidato.home][k] && !used[candidato.away][k] && jornadas[k].length < 18) {
              jornadas[k].push(candidato);
              used[candidato.home][k] = true;
              used[candidato.away][k] = true;
              candidato.jornada = k + 1;
              break;
            }
          }

          break;
        }
      }
    }
  }

  // Actualizar matches
  matches = jornadas.flat();
}








// =======================
// CLASIFICACIÓN
// =======================

function resetStandings() {
  standings = {};
  for (const t of teams) {
    standings[t.id] = {
      teamId: t.id,
      name: t.name,
      pts: 0,
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0
    };
  }
}

function recomputeStandings() {
  resetStandings();
  for (const m of matches) {
    if (m.gh === null || m.ga === null) continue;

    const home = standings[m.home];
    const away = standings[m.away];

    home.pj++;
    away.pj++;
    home.gf += m.gh;
    home.gc += m.ga;
    away.gf += m.ga;
    away.gc += m.gh;
    home.dg = home.gf - home.gc;
    away.dg = away.gf - away.gc;

    if (m.gh > m.ga) {
      home.pg++; away.pp++;
      home.pts += 3;
    } else if (m.gh < m.ga) {
      away.pg++; home.pp++;
      away.pts += 3;
    } else {
      home.pe++; away.pe++;
      home.pts += 1;
      away.pts += 1;
    }
  }
}


// =======================
// RENDER BOMBOS
// =======================

function renderBombos() {
  const div = document.getElementById("bombos");
  div.innerHTML = "";
  for (let pot = 1; pot <= 4; pot++) {
    const h3 = document.createElement("h3");
    h3.textContent = `Bombo ${pot}`;
    div.appendChild(h3);

    const ul = document.createElement("ul");
    ul.className = "bombo-list";

    teams
      .filter(t => t.pot === pot)
      .forEach(t => {
        const li = document.createElement("li");
        li.innerHTML = `<img src="${t.crest}" alt=""> ${t.name} (${t.country})`;
        ul.appendChild(li);
      });

    div.appendChild(ul);
  }
}


// =======================
// SELECTOR DE EQUIPO PARA ANIMACIÓN
// =======================

function renderEquipoSorteoSelect() {
  const sel = document.getElementById("equipoSorteo");
  sel.innerHTML = "";
  teams.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.textContent = `${t.name} (${t.country})`;
    sel.appendChild(opt);
  });
}


// =======================
// JORNADAS: selector + render
// =======================

function renderSelectJornada() {
  const sel = document.getElementById("selectJornada");
  sel.innerHTML = "";
  for (let j = 1; j <= 8; j++) {
    const opt = document.createElement("option");
    opt.value = j;
    opt.textContent = `Jornada ${j}`;
    sel.appendChild(opt);
  }
}

function renderPartidosJornada(j) {
  const div = document.getElementById("partidosJornada");
  const jornada = Number(j);
  const partidos = matches.filter(m => m.jornada === jornada);

  let html = `<table>
    <tr><th>Local</th><th>Goles</th><th>Visitante</th><th>Goles</th></tr>`;

  partidos.forEach((m, idx) => {
    const home = teams[m.home];
    const away = teams[m.away];

    html += `
      <tr>
        <td><img src="${home.crest}" width="16"> ${home.name}</td>
        <td><input type="number" min="0" data-j="${jornada}" data-i="${idx}" data-type="gh" value="${m.gh ?? ""}"></td>
        <td><img src="${away.crest}" width="16"> ${away.name}</td>
        <td><input type="number" min="0" data-j="${jornada}" data-i="${idx}" data-type="ga" value="${m.ga ?? ""}"></td>
      </tr>
    `;
  });

  html += `</table>
    <button id="btnGuardarJornada">Guardar resultados jornada ${jornada}</button>
  `;

  div.innerHTML = html;

  document.getElementById("btnGuardarJornada").onclick = () => {
    guardarResultadosJornada(jornada);
  };
}

function guardarResultadosJornada(jornada) {
  const inputs = document.querySelectorAll(`#partidosJornada input[type="number"]`);
  const partidos = matches.filter(m => m.jornada === jornada);

  inputs.forEach(input => {
    const idx = Number(input.getAttribute("data-i"));
    const type = input.getAttribute("data-type");
    const val = input.value === "" ? null : Number(input.value);
    if (val === null || isNaN(val)) return;

    if (type === "gh") partidos[idx].gh = val;
    if (type === "ga") partidos[idx].ga = val;
  });

  recomputeStandings();
  renderClasificacion();
}


// =======================
// CLASIFICACIÓN
// =======================

function renderClasificacion() {
  const div = document.getElementById("clasificacion");
  const lista = Object.values(standings);

  lista.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.dg !== a.dg) return b.dg - a.dg;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.name.localeCompare(b.name);
  });

  let html = `<table>
    <tr>
      <th>#</th><th>Equipo</th><th>PTS</th><th>PJ</th><th>PG</th><th>PE</th><th>PP</th><th>GF</th><th>GC</th><th>DG</th>
    </tr>`;

  lista.forEach((t, idx) => {
    const pos = idx + 1;
    let cls = "";
    if (pos <= 8) cls = "top8";
    else if (pos <= 24) cls = "playoff";
    else cls = "out";

    const teamInfo = teams.find(tm => tm.id === t.teamId);

    html += `
      <tr class="${cls}">
        <td>${pos}</td>
        <td><img src="${teamInfo.crest}" width="16"> ${t.name}</td>
        <td>${t.pts}</td>
        <td>${t.pj}</td>
        <td>${t.pg}</td>
        <td>${t.pe}</td>
        <td>${t.pp}</td>
        <td>${t.gf}</td>
        <td>${t.gc}</td>
        <td>${t.dg}</td>
      </tr>
    `;
  });

  html += `</table>`;
  div.innerHTML = html;
}
// =======================
// ANIMACIÓN DEL SORTEO (UEFA)
// =======================

function animarSorteoParaEquipo(teamId) {
  const cont = document.getElementById("animacionSorteo");
  cont.innerHTML = "";

  // Leer SOLO los rivales reales del sorteo
  const rivalesIds = Array.from(rivalsByTeam[teamId] || []);

  if (rivalesIds.length !== 8) {
    cont.textContent = "Error: este equipo no tiene 8 rivales asignados.";
    return;
  }

  const equipo = teams.find(t => t.id === teamId);
  const titulo = document.createElement("div");
  titulo.innerHTML = `<strong>Sorteo para ${equipo.name}</strong>`;
  cont.appendChild(titulo);

  // Ordenar por bombo
  const rivalesOrdenados = rivalesIds
    .map(id => teams.find(t => t.id === id))
    .sort((a, b) => a.pot - b.pot);

  let i = 0;
  function paso() {
    if (i >= rivalesOrdenados.length) return;
    const r = rivalesOrdenados[i];
    const line = document.createElement("div");
    line.className = "anim-line";
    line.innerHTML = `
      <span>Bombo ${r.pot} → </span>
      <img src="${r.crest}" alt="">
      <span>${r.name} (${r.country})</span>
    `;
    cont.appendChild(line);
    i++;
    setTimeout(paso, 800);
  }

  paso();
}



// =======================
// EVENTOS DE BOTONES
// =======================

document.getElementById("btnSorteo").onclick = () => {
  initTeams();
  generateSchedule();
  resetStandings();
  renderBombos();
  renderEquipoSorteoSelect();
  renderSelectJornada();
  renderPartidosJornada(1);
  renderClasificacion();
  document.getElementById("animacionSorteo").innerHTML =
    "Sorteo realizado. Elige un equipo y pulsa 'Ver animación'.";
};

document.getElementById("selectJornada").onchange = (e) => {
  const j = e.target.value;
  if (!matches.length) return;
  renderPartidosJornada(j);
};

document.getElementById("btnAnimacion").onclick = () => {
  const sel = document.getElementById("equipoSorteo");
  const id = Number(sel.value);
  if (!matches.length) {
    document.getElementById("animacionSorteo").textContent =
      "Primero realiza el sorteo.";
    return;
  }
  document.getElementById("animacionSorteo").innerHTML = "";
  animarSorteoParaEquipo(id);
};


// =======================
// INICIALIZACIÓN AUTOMÁTICA
// =======================

initTeams();
renderBombos();
renderEquipoSorteoSelect();
renderSelectJornada();
renderClasificacion();
