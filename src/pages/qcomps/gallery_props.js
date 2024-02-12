export default function Gallery() {
  function Profile({ sName, sPicture, sProfession, sAwards, sDiscovered }) {
    return (
      <>
        <section className="profile">
          <h2>{sName}</h2>
          <img
            className="avatar"
            src={sPicture}
            alt={sName}
            width={70}
            height={70}
          />
          <ul>
            <li>
              <b>Profession: </b>
              {sProfession}
            </li>
            <li>
              <b>Awards: 4 </b>({sAwards})
            </li>
            <li>
              <b>Discovered: </b>
              {sDiscovered}
            </li>
          </ul>
        </section>
      </>
    );
  }

  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        sName="Maria Skłodowska-Curie"
        sPicture="https://i.imgur.com/szV5sdGs.jpg"
        sProfession="physicist and chemist"
        sAwards="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
        sDiscovered="polonium (element)"
      />
      <Profile
        sName="Katsuko Saruhashi"
        sPicture="https://i.imgur.com/YfeOqp2s.jpg"
        sProfession="geochemist"
        sAwards="Miyake Prize for geochemistry, Tanaka Prize"
        sDiscovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
