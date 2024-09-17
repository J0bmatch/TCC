import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"


  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import { User, Menu, Users, Bell, Bolt, BookOpenText } from 'lucide-react';
export default function HomeCandidato(){
    return(
        <main>
            <aside className="bg-[#351AA0] w-[55px] h-screen gap-2">
                <nav className="flex flex-col items-start">
                <Sheet>
                    <SheetTrigger className="m-3 text-white"><Menu/></SheetTrigger>
                    <SheetContent side={"left"} className="bg-[#351AA0] w-[220px] gap-4 flex flex-col justify-between">
                        <SheetHeader>
                            <div className="flex flex-row m-4  ">
                                <SheetTitle className="text-white"><User/></SheetTitle>
                                <SheetDescription className="text-white">
                                Perfil
                                </SheetDescription>
                            </div>
                            <div className="flex flex-row mt-6">
                                <SheetTitle className="text-white"><Users/></SheetTitle>
                                <SheetDescription className="text-white">
                                Match
                                </SheetDescription>
                            </div>
                            <div className="flex flex-row mt-6">
                                <SheetTitle className="text-white"><Bell/></SheetTitle>
                                <SheetDescription className="text-white">
                                Notificação
                                </SheetDescription>
                            </div>
                            <div className="flex flex-row m-4">
                                <SheetTitle className="text-white"><Bolt/></SheetTitle>
                                <SheetDescription className="text-white">
                                Configuração
                                </SheetDescription>
                            </div>
                            <div className="flex flex-row m-4">
                                <SheetTitle className="text-white"><BookOpenText/></SheetTitle>
                                <SheetDescription className="text-white">
                                Feed
                                </SheetDescription>
                            </div>

                    
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className="m-3 text-white"><User/></TooltipTrigger>
                        <TooltipContent>
                        <p>Perfil</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger className="m-3 text-white"><Users/></TooltipTrigger>
                        <TooltipContent>
                        <p>Match</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger className="m-3 text-white"><Bell/></TooltipTrigger>
                        <TooltipContent>
                        <p>Notificações</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger className="m-3 text-white"><Bolt/></TooltipTrigger>
                        <TooltipContent>
                        <p>Configurações</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger className="m-3 text-white"><BookOpenText/></TooltipTrigger>
                        <TooltipContent>
                        <p>Feed</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                </nav>
            </aside>
        </main>            
    )
}