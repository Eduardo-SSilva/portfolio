import "./DarkMode.css";

export const DarkMode = () => {
  //const $html = document.querySelector("html");
  //const $checkbox = document.querySelector("#switch");

  //  $checkbox.addEventListener("change", function () {
  //    $html.classList.toggle("change_theme");
  //  });

  //const changeTheme:string =
  return (
    <>
      <div className="change_theme">
        <div className="dark_light">
          <label className="dark_light_switch">
            <input type="checkbox" name="change_theme" id="change_theme" />
            <span className="dark_light_slider dark_light_round"></span>
          </label>
        </div>
      </div>
    </>
  );
};
