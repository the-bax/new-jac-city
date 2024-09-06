import Bandcamp from '../components/Player/Bandcamp'
import CallToAction from '../components/Player/CallToAction'
import Clouds from '../components/Clouds'
import Cover from '../components/Player/Cover'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import Player from '../components/Player'
import Rule from '../components/Main/Rule'
import Section from '../components/Main/Section'
import TextBlock from '../components/Main/TextBlock'
import Tuber from '../components/Main/Tuber'

export default function Home(): JSX.Element {
  return (
    <>
      <Clouds />
      <Header />
      <Player>
        <Cover />
        <Bandcamp />
        <CallToAction />
      </Player>
      <Main>
        <Section>
          <TextBlock>
            <h2 id="tour-dates">Tour dates</h2>
            <p>
              The Jac is celebrating 10 years since their debut album, Nerve, was released on Rattle records. The album
              received warm reviews and critical acclaim, including a nomination in the Aotearoa Music Awards
              &ldquo;Best Jazz Album&rdquo; category. Now The Jac is going back to where it all begin with three shows
              in the Te-Ika-a-Maui / The North Island:
            </p>
            <ul>
              <li>
                <a href="https://www.creativejazzclub.co.nz/cjc-creative-jazz-club-events" rel="external">
                  October 9th: Auckland / CJC / Pah Homestead
                </a>
              </li>
              <li>
                <a href="https://www.cth.co.nz/events-calendar/" rel="external">
                  October 10th: Cambridge / Cambridge Town Hall
                </a>
              </li>
              <li>
                <a href="https://www.globetheatre.co.nz/content/whats-0" rel="external">
                  October 11th: Palmerston North / The Globe Theatre
                </a>
              </li>
            </ul>
          </TextBlock>
        </Section>
        <Section>
          <TextBlock>
            <h2 id="albums">About the albums</h2>
            <p>
              Featuring material from their{' '}
              <strong>2017 collaboration with Korean traditional quartet Black String</strong>, plus a swathe of brand
              new original compositions, the two albums encapsulate a milestone in their sound.
            </p>
            <p>
              Recorded at Roundhead Studios in Auckland, they are a beautifully produced illustration of a band at the
              height of its powers; showcasing their intricate and immersive compositions; tight ensemble playing, and
              assertive, individual improvising voices.
            </p>
            <p>
              Two of the tracks, “Beyond the Palace” and “A Gathering” were nominated for the
              <strong>2018 APRA/AMCOS Best Jazz Composition of the Year Award</strong>. A third,{' '}
              <strong>“Tui”, won the same award in 2020</strong>.
            </p>
          </TextBlock>
        </Section>
        <Tuber src="https://www.youtube.com/embed/4jUMUcCuMJ4" />
        <Rule />
        <Section>
          <TextBlock>
            <h2 id="about-the-jac">About The Jac</h2>
            <p>
              Since 2010 the 8-piece ensemble The Jac has been a leading voice in the New Zealand jazz scene, pushing a
              modern sound with their distinctive, through-composed compositions, tight ensemble playing and impressive
              live shows. Based in Wellington and drawing talent from Melbourne and Montreal, the band brings together
              musicians from the jazz, classical and metal scenes.
            </p>
            <p>
              The Jac have gone from strength to strength: their debut album Nerve (2014) was nominated for the NZ Music
              Awards Best Jazz Album of the year; the opening track “Sons of Thunder” from The Green Hour (2015) won New
              Zealand’s inaugural Jazz Composition of the Year award; in 2017 they performed 12 shows around the country
              as part of Chamber Music New Zealand’s “Encompass” tour, solidifying their cross-genre credentials; and
              this was followed by a headlining concert with Korean traditional/jazz fusion group, Black String, at the
              Wellington Jazz Festival, which sold out and garnered rave reviews. A spot at the Jarasum International
              Jazz Festival and a tour of 6 cities in South Korea followed. In 2019 they were again awarded Jazz
              Composition of the Year award for “Chungin’”
            </p>
            <p>
              The band features musicians bringing influences and expertise from outside the jazz spectrum. Notable
              among these are Matthew Allison, associate principal trombonist in the New Zealand Symphony Orchestra, and
              Shaun Anderson, drummer for metal bands Saving Grace and Depths. Completing the line-up are Alexis French,
              trumpet; Nick Tipping, bass; Chris Buckland, saxophones; Daniel Millward, piano and compositions; Callum
              Allardice, guitar and compositions; and Jake Baxendale, saxophones and compositions.
            </p>
          </TextBlock>
        </Section>
        <Tuber src="https://www.youtube.com/embed/IPYD_OjoMzA" />
      </Main>
      <Footer />
    </>
  )
}
