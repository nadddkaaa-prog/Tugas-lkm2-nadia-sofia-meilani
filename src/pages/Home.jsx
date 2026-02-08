import Hero from "../components/Hero.jsx"; 
import SkillCard from "../components/SkillCard"; 
export default function Home() { 
return ( 
<> 
<Hero /> 
<section id="skill" className="section"> 
<h2>Keahlian Saya</h2> 
<div className="grid"> 
<SkillCard title="HTML & CSS" 
desc="Membuat tampilan website modern" icon="  🪱  " 
/> 
<SkillCard title="JavaScript" 
desc="Logika dan interaksi web" icon="  💕 " /> 
<SkillCard title="React" desc="Single 
Page Application" icon="   🌷 " /> 
<SkillCard title="Laravel" 
desc="Backend & API" icon="  😶‍🌫️   " /> 
</div> 
</section> 
</> 
); 
} 