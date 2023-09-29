// import "../../reset.css";
import "./footer.css";

function Footer() {

  return (
    <div className="footer">
      <div className="top">
        <section className="left">
          <div></div>
        </section>
        <section className="middle">
          <p>
            Watch Online is a free movie and TV shows streaming site. With over
            50,000 movies and TV Shows we let you watch each movie online
            without having to register or pay. You can also bookmark or share
            each full movie and episode to watch it later if you want.
          </p>
        </section>
        <aside className="right">
            <a className="logo" href="https://github.com/UT-ACM-Student-Chapter/Front-end-1402-Ali-Shourvazi" target="blank"></a>
        </aside>
      </div>

      <div className="bottom">
        <p>
          <a href="#categories">Back to top &uarr;</a>
        </p>
      </div>
    </div>
  );
}
export default Footer;
