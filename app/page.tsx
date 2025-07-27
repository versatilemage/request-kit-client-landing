"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Rocket,
  Shield,
  Code2,
  Zap,
  Package,
  Download,
  Github,
  ExternalLink,
  CheckCircle,
  Globe,
  Lock,
  Layers,
  Settings,
  RefreshCw,
  FileCode,
  Puzzle,
  Route,
  Server,
  Menu,
} from "lucide-react";
import Link from "next/link";
import Logo from "@/components/hoc/logo";

export default function RequestKitClientLanding() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates((prev) => ({ ...prev, [id]: true }));
      toast.success("Copied to clipboard!");

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [id]: false }));
      }, 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const features = [
    {
      icon: <Puzzle className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Plug-and-play API client",
      description: "Ready to use out of the box with minimal configuration",
    },
    {
      icon: <Lock className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Token Injection",
      description: "Automatic token management via Axios interceptors",
    },
    {
      icon: <Layers className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Modular services",
      description: "Organized auth, user, and custom service modules",
    },
    {
      icon: <FileCode className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Auto Content-Type",
      description: "Intelligent handling for JSON and FormData",
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Centralized error normalization",
      description: "Consistent error handling across all API calls",
    },
    {
      icon: <RefreshCw className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Optional response caching",
      description: "Built-in caching for improved performance",
    },
    {
      icon: <Settings className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Dynamic custom service creation",
      description: "Create custom services on the fly",
    },
    {
      icon: <Code2 className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Full TypeScript support",
      description: "Complete type safety and IntelliSense support",
    },
    {
      icon: <Route className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Custom route overrides",
      description: "Flexible routing configuration",
    },
    {
      icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Composable and extendable",
      description: "Works with any API architecture",
    },
    {
      icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Unauthorized handler support",
      description: "Built-in onUnauthorized callback handling",
    },
    {
      icon: <Server className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "SSR & Public/Private API compatibility",
      description: "Works seamlessly in all environments",
    },
  ];

  const navigationItems = [
    { href: "#features", label: "Features" },
    { href: "#installation", label: "Installation" },
    { href: "#examples", label: "Examples" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" /> */}
            <Logo/>
            <span className="text-lg sm:text-xl font-bold">
              request-kit-client
            </span>
            <Badge variant="secondary" className="text-xs">
              v0.8.1
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://github.com/versatilemage/request-kit-client"
                className="flex items-center space-x-2"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-orange-500 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Separator className="my-4" />
                <Button
                  variant="outline"
                  asChild
                  className="justify-start bg-transparent"
                >
                  <Link
                    href="https://github.com/versatilemage/request-kit-client"
                    className="flex items-center space-x-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 bg-orange-500 rounded-full">
              {/* <Rocket className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-orange-500" /> */}
              <Logo size="L" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent leading-tight">
            Request Kit Client
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-6 sm:mb-8 leading-relaxed px-4">
            A powerful, TypeScript-first API client SDK for authentication, user
            profile management, and custom HTTP services — built with Axios and
            clean developer ergonomics.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 w-full sm:w-auto"
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-6 sm:px-8 py-3 bg-transparent w-full sm:w-auto"
              asChild
            >
              <Link
                href="https://www.npmjs.com/package/request-kit-client"
                className="flex items-center justify-center"
              >
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                View on NPM
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 px-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
              <span>MIT License</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
              <span>24.1 kB Unpacked</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
              <span>0 Dependencies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Quick Installation
            </h2>
            <p className="text-slate-600">Get up and running in seconds</p>
          </div>
          <Card className="bg-slate-900 text-white">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm text-slate-400">
                  Terminal
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 min-h-[32px] sm:min-h-[36px]"
                  onClick={() =>
                    copyToClipboard("npm i request-kit-client", "install")
                  }
                >
                  {copiedStates.install ? (
                    <>
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Copied!
                    </>
                  ) : (
                    "Copy"
                  )}
                </Button>
              </div>
              <div className="overflow-x-auto">
                <code className="text-green-400 text-sm sm:text-lg whitespace-nowrap">
                  npm i request-kit-client
                </code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Powerful Features
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Everything you need for modern API client development
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 sm:p-2 bg-orange-100 rounded-lg text-orange-500 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-base sm:text-lg leading-tight">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-slate-600 text-sm sm:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ideal for Frontend Apps
            </h2>
            <p className="text-slate-600">
              Perfect for any frontend application that needs:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    Modular API services
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Organized auth, user, and custom services
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    Token injection
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Automatic authentication handling
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    Type-safe requests
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Full TypeScript support and validation
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    Error normalization
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Consistent error handling patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section id="examples" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Simple to Use
            </h2>
            <p className="text-slate-600">Clean, intuitive API design</p>
          </div>
          <Card className="bg-slate-900 text-white">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center space-x-2 text-sm sm:text-base">
                  <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Basic Usage</span>
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 min-h-[32px] sm:min-h-[36px]"
                  onClick={() =>
                    copyToClipboard(
                      `import { RequestKitClient } from 'request-kit-client';

const client = new RequestKitClient({
  baseURL: 'https://api.example.com',
  token: 'your-auth-token'
});

// Use modular services
const user = await client.user.getProfile();
const posts = await client.custom.get('/posts');`,
                      "example"
                    )
                  }
                >
                  {copiedStates.example ? (
                    <>
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Copied!
                    </>
                  ) : (
                    "Copy"
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="overflow-x-auto">
                <pre className="text-xs sm:text-sm">
                  <code className="text-green-400 whitespace-pre">{`import { RequestKitClient } from 'request-kit-client';

const client = new RequestKitClient({
  baseURL: 'https://api.example.com',
  token: 'your-auth-token'
});

// Use modular services
const user = await client.user.getProfile();
const posts = await client.custom.get('/posts');`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advanced Examples Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Advanced Usage
            </h2>
            <p className="text-slate-600">Explore more powerful features</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <Card className="bg-slate-900 text-white">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-xs sm:text-sm">
                    Authentication Setup
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-white text-xs px-2 py-1 min-h-[28px] sm:min-h-[32px]"
                    onClick={() =>
                      copyToClipboard(
                        `// Initialize with auth
const client = new RequestKitClient({
  baseURL: 'https://api.example.com',
  onUnauthorized: () => {
    // Handle token refresh
    window.location.href = '/login'
  }
})

// Set token dynamically
client.setToken('new-jwt-token')`,
                        "auth-setup"
                      )
                    }
                  >
                    {copiedStates["auth-setup"] ? (
                      <>
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Copied!
                      </>
                    ) : (
                      "Copy"
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="overflow-x-auto">
                  <pre className="text-xs">
                    <code className="text-green-400 whitespace-pre">{`// Initialize with auth
const client = new RequestKitClient({
  baseURL: 'https://api.example.com',
  onUnauthorized: () => {
    // Handle token refresh
    window.location.href = '/login'
  }
})

// Set token dynamically
client.setToken('new-jwt-token')`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 text-white">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-xs sm:text-sm">
                    Custom Services
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-white text-xs px-2 py-1 min-h-[28px] sm:min-h-[32px]"
                    onClick={() =>
                      copyToClipboard(
                        `// Create custom service
const blogService = client.createService('blog', {
  getPosts: () => client.get('/posts'),
  createPost: (data) => client.post('/posts', data),
  updatePost: (id, data) => client.put(\`/posts/\${id}\`, data)
})

// Use custom service
const posts = await blogService.getPosts()`,
                        "custom-service"
                      )
                    }
                  >
                    {copiedStates["custom-service"] ? (
                      <>
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Copied!
                      </>
                    ) : (
                      "Copy"
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="overflow-x-auto">
                  <pre className="text-xs">
                    <code className="text-green-400 whitespace-pre">{`// Create custom service
const blogService = client.createService('blog', {
  getPosts: () => client.get('/posts'),
  createPost: (data) => client.post('/posts', data),
  updatePost: (id, data) => client.put(\`/posts/\${id}\`, data)
})

// Use custom service
const posts = await blogService.getPosts()`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Join developers who are building better APIs with request-kit-client
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="px-6 sm:px-8 py-3 w-full sm:w-auto"
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Install Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 sm:px-8 py-3 border-white text-white hover:bg-white hover:text-orange-500 bg-transparent w-full sm:w-auto"
              asChild
            >
              <Link href="https://www.npmjs.com/package/request-kit-client">
                <Package className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                View Documentation
              </Link>
            </Button>
          </div>

          {/* Quick install options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
            {[
              { manager: "npm", command: "npm i request-kit-client" },
              { manager: "yarn", command: "yarn add request-kit-client" },
              { manager: "pnpm", command: "pnpm add request-kit-client" },
            ].map((pkg) => (
              <Card
                key={pkg.manager}
                className="bg-white/10 backdrop-blur-sm border-white/20"
              >
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium opacity-90">
                      {pkg.manager}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white/70 hover:text-white h-6 px-2 text-xs min-h-[24px] sm:min-h-[28px]"
                      onClick={() =>
                        copyToClipboard(pkg.command, `cta-${pkg.manager}`)
                      }
                    >
                      {copiedStates[`cta-${pkg.manager}`] ? (
                        <>
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Copied!
                        </>
                      ) : (
                        "Copy"
                      )}
                    </Button>
                  </div>
                  <div className="overflow-x-auto">
                    <code className="text-xs sm:text-sm opacity-90 whitespace-nowrap">
                      {pkg.command}
                    </code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                {/* <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" /> */}
                <Logo />
                <span className="text-base sm:text-lg font-bold">
                  request-kit-client
                </span>
              </div>
              <p className="text-slate-400 mb-3 sm:mb-4 text-sm sm:text-base">
                A powerful, TypeScript-first API client SDK built with clean
                developer ergonomics.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com/versatilemage/request-kit-client">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://www.npmjs.com/package/request-kit-client">
                    <Package className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Resources
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Community
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    GitHub Issues
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discussions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contributing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-6 sm:my-8 bg-slate-700" />
          <div className="flex flex-col sm:flex-row justify-between items-center text-slate-400 text-xs sm:text-sm space-y-2 sm:space-y-0">
            <p>&copy; 2024 request-kit-client. MIT License.</p>
            <p>Built with ❤️ for developers</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
