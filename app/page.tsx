import Image from "next/image";
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] items-center justify-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  John Doe
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Software Engineer | Full-Stack Developer
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  I&apos;m a passionate software engineer with expertise in building scalable and user-friendly web
                  applications.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Learn More
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I&apos;m a software engineer with a passion for building innovative and user-friendly web applications. I
                  have a strong background in full-stack development, with expertise in technologies like React,
                  Node.js, and MongoDB.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Skills</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    React, Node.js, MongoDB, Express, JavaScript, TypeScript, HTML, CSS, Git, AWS
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Education</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Bachelor of Science in Computer Science, University of California, Berkeley
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Experience</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    5+ years of experience in web development, working with startups and enterprise companies.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="About"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of the projects I&apos;ve worked on.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 1"
                className="aspect-video overflow-hidden rounded-t-xl object-cover"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-bold">Project 1</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A web application that helps users manage their tasks and projects.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 2"
                className="aspect-video overflow-hidden rounded-t-xl object-cover"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-bold">Project 2</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A mobile-friendly e-commerce platform for selling handmade products.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 3"
                className="aspect-video overflow-hidden rounded-t-xl object-cover"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-bold">Project 3</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A data visualization dashboard for tracking key business metrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a project in mind or just want to say hello? Fill out the form below and I&apos;ll get back to you as
                soon as possible.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 w-full max-w-md space-y-4">
            <form>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
