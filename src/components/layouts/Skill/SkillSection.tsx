import { Flex, Title, Box, Text, Image, Stack } from "@mantine/core";
import { FcEngineering } from "react-icons/fc";
import { styles } from "./SkillSection.module";
import { Fragment } from "react";
import SkillCollapse from "@/components/elements/SkillCollapse";

export default function SkillSection() {
    const skillDatas = {
        'Programming Languages': [
            {
                name: 'JavaScript',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
            },
            {
                name: 'TypeScript',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
            },
            {
                name: 'PHP',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
            },
            {
                name: 'Ruby',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg',
            },
            {
                name: 'Node.js',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
            },
            {
                name: 'Python',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
            },
        ],
        'Frontend Development': [
            {
                name: 'HTML',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
            },
            {
                name: 'CSS',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
            },
            {
                name: 'SASS',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
            },
            {
                name: 'TailwindCSS',
                src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
            },
            {
                name: 'PandaCSS',
                src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwLjk5ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1OSI+PHBhdGggZmlsbD0iI2Y2ZTQ1OCIgZD0iTTAgMjkuNjQyQzAgMTMuMjcyIDEzLjI3MSAwIDI5LjY0MiAwaDE5Ni43MTZDMjQyLjcyOCAwIDI1NiAxMy4yNzEgMjU2IDI5LjY0MnYxOTkuNDFjMCAxNi4zNzItMTMuMjcxIDI5LjY0My0yOS42NDIgMjkuNjQzSDI5LjY0MkMxMy4yNzIgMjU4LjY5NSAwIDI0NS40MjQgMCAyMjkuMDUyeiIvPjxwYXRoIGQ9Ik0xNjQuMDU2IDU3LjgyNWMtMTQuMTI0LTQuMDU3LTI4LjUzLTQuNjA5LTQzLjIxMi0zLjI5NmMtOC4yMTYuODU0LTE2LjExNCAyLjQ4NS0yMy43MzIgNS4zNDdDODAuNjQ0IDY2LjA2IDY4LjI4IDc2Ljc3NCA2MC45MDggOTIuOTA0Yy01LjI4NiAxMS41NjQtNy4xOTYgMjMuODQ4LTcuMzk1IDM2LjQ1MmMtLjIxIDEzLjMyIDEuNDU5IDI2LjQ1NSA0LjExIDM5LjQ3OGMyLjQwNSAxMS44MDQgNS42MDcgMjMuMzc3IDEwLjE3OSAzNC41NWMuNDM0IDEuMDYuOTc1IDEuNDE4IDIuMTM1IDEuNDE2YzE0LjQ2MS0uMDMxIDI4LjkyMy0uMDMxIDQzLjM4NS0uMDMxaDEyLjg0M2MuMzI4IDAgLjY1Ni0uMDE5IDEuMDMzLS4wNGwuNjIyLS4wMzFsLS4yMzgtLjU3NWEyMCAyMCAwIDAgMC0uNDA3LS45NTNjLTEuMDQ1LTIuMjM3LTIuMTEzLTQuNDY0LTMuMTgtNi42OTJjLTIuMzE2LTQuODMyLTQuNjMtOS42NjQtNi43MjQtMTQuNTkxYy02LjM1MS0xNC45NC0xMS4yMTUtMzAuMzI0LTEyLjY5OS00Ni42MDhjLS42NTQtNy4xODUtLjU2NC0xNC4zMjkgMS40My0yMS4zM2MyLjI3OC04LjAwMyA3LjE2OC0xMy42NTIgMTUuMjc0LTE2LjAxNGM3LjQ0NS0yLjE2OCAxNC45OTMtMi4xNTQgMjIuMzk2LjI0YzYuNjA4IDIuMTM3IDEwLjkxNiA2LjY1IDEyLjc0OCAxMy40MDhjMS40MDggNS4xOSAxLjQwNyAxMC40MzYuMzQzIDE1LjY2OWMtLjgyIDQuMDI4LTIuNDcgNy43MDUtNS40NDEgMTAuNjQ1Yy01LjMzIDUuMjc1LTExLjk4NSA2LjQ4OS0xOS4xMjYgNi4wODRjLTEuMjctLjA3Mi0yLjUzNy0uMjEtMy44NDItLjM1NXEtLjkxNi0uMS0xLjg2NC0uMTk3cS4wMjUuMzAyLjAzOC41NjJjLjAxOC4zNDMuMDM0LjY0LjEwNC45MjVjLjMwNSAxLjIyMy41OTUgMi40NTEuODg1IDMuNjc5Yy42OTkgMi45NTggMS4zOTcgNS45MTUgMi4yOTUgOC44MWExNzAgMTcwIDAgMCAwIDYuMTQgMTYuNjU0YzE2LjU3Ny0xLjI5NCAzMS44NDMtNS40MTQgNDguMDQ3LTE1LjE0MWMuMjQ0LS4xNTQuNDY1LS4yOTIuNjg3LS40M2M2Ljk2LTQuMzMzIDEyLjU5My05Ljk1NCAxNi40NzgtMTcuMjEzYzYuMjkxLTExLjc1NCA3LjUxOC0yNC4zMjQgNS42NDktMzcuMjk5Yy0xLjkzLTEzLjM5LTcuOTM4LTI0LjYzLTE4LjI4My0zMy40NDVjLTcuMTc0LTYuMTE1LTE1LjQ3LTEwLjEyLTI0LjQ3NC0xMi43MDYiLz48L3N2Zz4=',
            },
            {
                name: 'jQuery',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg',
            },
            {
                name: 'React',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
            },
            {
                name: 'Next.js',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
            },
            {
                name: 'Vue.js',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
            },
            {
                name: 'Vuetify',
                src: 'https://bestofjs.org/logos/vuetify.svg',
            },
            {
                name: 'Angular',
                src: 'https://angular.io/assets/images/logos/angular/angular.svg',
            },
        ],
        'Backend Development': [
            {
                name: 'Laravel',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg',
            },
            {
                name: 'CakePHP',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cakephp/cakephp-original.svg',
            },
            {
                name: 'Ruby on Rails',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg',
            },
            {
                name: 'Django',
                src: 'https://cdn.worldvectorlogo.com/logos/django.svg',
            },
            {
                name: 'Express',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
            },
            {
                name: 'Nest.js',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg',
            },
            {
                name: 'Nginx',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg',
            },
        ],
        'Database': [
            {
                name: 'MySQL',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
            },
            {
                name: 'SQLServer',
                src: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',
            },
            {
                name: 'Redis',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg',
            },
        ],
        'DevOps': [
            {
                name: 'AWS',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
            },
            {
                name: 'GCP',
                src: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
            },
            {
                name: 'Docker',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
            },
            {
                name: 'Jenkins',
                src: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg',
            },
        ],
        'Software': [
            {
                name: 'Figma',
                src: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
            },
        ],
        'Other': [
            {
                name: 'Git',
                src: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
            },
            {
                name: 'Linux',
                src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
            },
        ],
    };

    const skills = (
        <>
            <SkillCollapse label="プログラミング言語" items={skillDatas["Programming Languages"]} />
            <SkillCollapse label="フロントエンド開発" items={skillDatas["Frontend Development"]} />
            <SkillCollapse label="バックエンド開発" items={skillDatas["Backend Development"]} />
            <SkillCollapse label="データベース" items={skillDatas["Database"]} />
            <SkillCollapse label="DevOps" items={skillDatas["DevOps"]} />
            <SkillCollapse label="ソフトウェア" items={skillDatas["Software"]} />
            <SkillCollapse label="その他" items={skillDatas["Other"]} />
        </>
    )

    return (
        <Box m={0} className={styles.section}>
            <Flex align={'center'} mb={28}>
                <Box mr={8}>
                    <FcEngineering size={'34px'} />
                </Box>
                <Title order={1} display={'flex'}>MY SKILLS</Title>
            </Flex>
            <Stack>
                {skills}
            </Stack>
        </Box>
    )
}