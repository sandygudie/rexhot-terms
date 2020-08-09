import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <section>
        <article>
          <div className="content"></div>

          <div
            class="content_part section_padding"
            style={{ position: "relative", bottom: "20" }}
          >
            <div class="contain">
              <div class="word">
                <h2>
                  {" "}
                  We are commited to ensuring that creators get rewarded for
                  their contents.
                </h2>
              </div>
            </div>
          </div>
        </article>

        <article>
          <div class="mainone">
            <div>
              <h3>What we do?</h3>
              <p>
                We give creators a platform to gain value for their contents.
                Rexhot is a place for creators to get rewarded and recognised
                for their value.
              </p>
            </div>

            <div>
              <h3>Why we do it?</h3>
              <p>
                We want creators to be appreciated and supported for the value
                they bring. we encourage creators to be a full expression of
                their creativity knowing that they are loved.
              </p>
            </div>

            <div>
              <h3>How we doing it?</h3>

              <p>
                Creators share their contents on Rexhot and invite friends to
                support their good work.{" "}
              </p>
            </div>
          </div>
        </article>

        <article>
          <div className="contenttwo"></div>

          <div
            class="content_parttwo section_padding"
            style={{ position: "relative", bottom: "20" }}
          >
            <div class="containtwo">
              <div class="word">
                <h2>
                  {" "}
                  Rexhot develops practical solutions that makes creativity
                  exciting.{" "}
                </h2>
              </div>
            </div>
          </div>
        </article>

        <article class="our">
          <div class="talks">
            <div class="topic">
              <h3> Target Audience.</h3>
            </div>
            <div class="topic">
              <p>
                Any one can create. our target audience are content creators,
                YouTubers, inflencers, comedy acts, technical writers,
                storytellers
              </p>
            </div>
          </div>

          <div class="talks">
            <div class="topic">
              <h3>Our team.</h3>
            </div>
            <div class="topic">
              <p>
                We have a team of young smart people, who are willing to do what
                it takes for Rexhot to be useful tool for content creators. We
                spend our time designing and building Rexhot to better capacity.
                We’re developers, enterprise architects, project managers,
                designers, writers, content creators, gamers.
              </p>
            </div>
          </div>

          <div class="talks">
            <div class="topic">
              <h3>Career Growth.</h3>
            </div>
            <div class="topic">
              <p>
                We're looking for ambition, talent and motivation. We're open to
                individuals who are willing to create solutions that positively
                impact our world and drive economic growth. There are
                opportunities for leadership growth, entrepreneurship and
                business management skills.
              </p>
            </div>
          </div>
        </article>
      </section>
    </React.Fragment>
  );
}
