import Image from "next/image";

export default function Home() {
  return (
    <form action="/TraitData" method="post">
        <p>
          <label htmlFor="">Prenom</label>
          <input type="text" name="" id=""/>
        </p>
        <p>
          <label htmlFor="">Nom</label>
          <input type="text" name="" id=""/>
        </p>
        <p>
          <label htmlFor="">Objet</label>
        </p>
        <p>
          <label htmlFor="">Email contact</label>
          <input type="text" name="" id=""/>
        </p>
        <p>
          <input type="submit" value="Envoyer" />
        </p>
    </form>
  );
}
