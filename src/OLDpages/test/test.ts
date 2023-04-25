import { Button } from '../../components/Button';
import { HomePage } from '../../components/Home';



const button = new Button({
  label: "hiello",
  events: {
    click: () => console.log("clicked")
  },
});

const homePage = new HomePage({button})



export const TestComp = {
  render: () => {
    return `
       <div style="width: 500px; height: 500px; background-color: #1e1e1e">AAA</div>
       ${homePage.getContent()!}
    `;
  }
}


