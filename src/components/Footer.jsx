import { profile } from '../data/data.js'

export default function Footer() {
  return <footer><div className="footer-inner">
    <span>© {new Date().getFullYear()} {profile.name}</span>
    <span><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></span>
  </div></footer>
}
