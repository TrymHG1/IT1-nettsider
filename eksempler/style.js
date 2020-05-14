
const inpNavn = document.querySelector("#inpNavn");
const inpMelding = document.querySelector("#inpMelding");
const btn = document.querySelector("#btn");
const divMeldinger = document.querySelector("#divMeldinger");

const db = firebase.firestore();
const bilregister = db.collection("bilregister");
const superchat = db.collection("superchat");

superchat.onSnapshot(snap => {
  for(const melding of snap.docs) {
    console.log( melding.data() );
    divMeldinger.innerHTML += `
    <section class="meldingsBoks">
    <div class="sender">${melding.data().fra} : </div>
    <div class="melding">${melding.data().tekst}</div>
    </section>
    `;
  }
})

superchat.onSnapshot(snap => {
console.log(snap);
})

btn.onclick = () => {
  superchat.add({
    fra:inpNavn.value,
    tekst: inpMelding.value
  })
}


const visBil = async (regnr) => {
  const ref = bilregister.doc(regnr);
  const bil = await ref.get();
  console.log(bil.data());
}
