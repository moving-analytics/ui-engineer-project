import React from "react";
import Layout from "../components/layout";
import SemiCircularProgressBar from "../components/SemiCircularProgressBar";

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.example.data;

    return (
      <Layout>
        {posts.map(type => {
          const percentage = Math.round((type.value / type.max) * 100);
          let color = "";
          if ((percentage > 0) & (percentage < 30)) {
            color = "#03fcba";
          } else if ((percentage > 31) & (percentage < 70)) {
            color = "#fcd703";
          } else if ((percentage > 71) & (percentage <= 100)) {
            color = "#fc3503";
          }
          return (
            <div key={type.type}>
              <SemiCircularProgressBar
                strokeWidth="10"
                sqSize="400"
                percentage={percentage}
                color={color}
                min={type.min}
                max={type.max}
                type={type.type}
              />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    example {
      data {
        type
        min
        max
        value
      }
    }
  }
`;
