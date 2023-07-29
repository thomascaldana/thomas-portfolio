import { FC } from 'react'
import { ContainerButtons, ExploreProjectsButton, DownloadButton, GitHubButton, WhatsAppButton, Link, FiDownloadStyled, AiFillGithubStyled, IoLogoWhatsappStyled,  } from './styles'



const InitialButtons: FC = () => {


  return (
    <ContainerButtons>


      <Link>
        <ExploreProjectsButton >
          Explore Projects
        </ExploreProjectsButton>
      </Link>


      <Link href='https://drive.google.com/file/d/1-vUvQNV1rAFDTIo50MPU0rTFgun-ksIm/view?usp=sharing' target='_blank'>
        <DownloadButton >
          Download Resume <FiDownloadStyled />
        </DownloadButton>
      </Link>


      <Link href='https://github.com/thomascaldana' target='_blank' >
        <GitHubButton  >
          <AiFillGithubStyled />
        </GitHubButton>
      </Link>

      <Link href='https://wa.me/+5519996018238' target='_blank' >
        <WhatsAppButton  >
          <IoLogoWhatsappStyled />
        </WhatsAppButton>
      </Link>
    </ContainerButtons>
  )
}

export default InitialButtons