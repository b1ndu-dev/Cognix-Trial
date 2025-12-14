"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { toast } from "sonner";
import { Search, Trash, Undo } from "lucide-react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";
import { ConfirmModal } from "@/components/modals/confirm-modal";

export const TrashBox = () => {
    const router = useRouter();
    const params = useParams();
    const [filter, setFilter] = useState("");

    // Mock data for archived documents
    const archivedDocuments = [
        { id: "6", title: "Old Research", parentDocument: null },
        { id: "7", title: "Draft Blog Post", parentDocument: null },
    ];

    const filteredDocuments = archivedDocuments.filter((doc) => {
        return doc.title.toLowerCase().includes(filter.toLowerCase());
    });

    const onClick = (documentId: string) => {
        router.push(`/documents/${documentId}`);
    };

    const onRestore = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        documentId: string,
    ) => {
        event.stopPropagation();
        // Mock functionality
        toast.success("Note restored!");
    };

    const onRemove = (
        documentId: string,
    ) => {
        // Mock functionality
        toast.error("Note permanently deleted!");
    };

    return (
        <div className="text-sm">
            <div className="flex items-center gap-x-1 p-2">
                <Search className="h-4 w-4" />
                <Input
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="h-7 px-2 focus-visible:ring-transparent bg-secondary"
                    placeholder="Filter by page title..."
                />
            </div>
            <div className="mt-2 px-1 pb-1">
                <p className="hidden last:block text-xs text-center text-muted-foreground pb-2">
                    No documents found.
                </p>
                {filteredDocuments.map((document) => (
                    <div
                        key={document.id}
                        role="button"
                        onClick={() => onClick(document.id)}
                        className="text-sm rounded-sm w-full hover:bg-primary/5 flex items-center text-primary justify-between"
                    >
                        <span className="truncate pl-2">
                            {document.title}
                        </span>
                        <div className="flex items-center">
                            <div
                                onClick={(e) => onRestore(e, document.id)}
                                role="button"
                                className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                            >
                                <Undo className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <ConfirmModal onConfirm={() => onRemove(document.id)}>
                                <div
                                    role="button"
                                    className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                                >
                                    <Trash className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </ConfirmModal>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
