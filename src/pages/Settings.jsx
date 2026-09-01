import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useAuth } from "@/lib/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import PageHeader from "@/components/shared/PageHeader";
import Reveal from "@/components/shared/Reveal";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LogOut, Trash2, Mail, Loader2, Pencil, Check, AlertTriangle } from "lucide-react";

export default function Settings() {
  const { user, logout, checkUserAuth } = useAuth();
  const { toast } = useToast();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.full_name || "");
  const [saving, setSaving] = useState(false);

  const initials =
    (user?.full_name || "LC")
      .split(" ")
      .map((w) => w[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase() || "LC";

  const saveName = async () => {
    if (!name.trim()) return;
    setSaving(true);
    try {
      await base44.auth.updateMe({ full_name: name.trim() });
      await checkUserAuth();
      setEditing(false);
      toast({ title: "Profile updated", description: "Your name has been saved." });
    } catch (err) {
      toast({
        title: "Could not update profile",
        description: err?.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!user?.id) {
      toast({ title: "Sign in required", description: "You must be signed in to delete your account.", variant: "destructive" });
      return;
    }
    setDeleting(true);
    try {
      await base44.entities.User.delete(user.id);
      toast({ title: "Account deleted", description: "Your account has been removed." });
      logout(false);
      window.location.href = "/";
    } catch (err) {
      toast({
        title: "Could not delete account",
        description: err?.message || "Please contact support.",
        variant: "destructive",
      });
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
      <PageHeader eyebrow="Account" title="Settings" subtitle="Manage your profile, session, and account." />
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[720px] mx-auto px-6 md:px-7">
          <Reveal>
            <h2 className="text-navy font-bold text-xl mb-5">Profile</h2>
            <div className="border border-navy/10 rounded-sm divide-y divide-navy/10">
              <div className="flex items-center gap-4 px-5 py-4">
                <div className="w-10 h-10 rounded-full bg-navy text-gold-soft flex items-center justify-center font-bold text-sm tracking-wide">
                  {initials}
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gold-deep">Name</div>
                  {editing ? (
                    <div className="flex items-center gap-2 mt-1">
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 border border-navy/15 rounded-sm px-3 py-1.5 text-navy text-[15px] focus:outline-none focus:border-gold-deep"
                      />
                      <Button onClick={saveName} size="sm" className="gap-1.5" disabled={saving || !name.trim()}>
                        {saving ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
                        Save
                      </Button>
                      <Button onClick={() => { setEditing(false); setName(user?.full_name || ""); }} size="sm" variant="outline" disabled={saving}>
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-navy font-medium">{user?.full_name || "LConnectiQ member"}</span>
                      <button
                        onClick={() => { setName(user?.full_name || ""); setEditing(true); }}
                        className="inline-flex items-center gap-1.5 text-[13px] text-ink-soft hover:text-gold-deep transition-colors"
                      >
                        <Pencil size={13} /> Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4 px-5 py-4">
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gold-deep">Email</div>
                  <div className="text-navy font-medium">{user?.email || "—"}</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <h2 className="text-navy font-bold text-xl mb-5">Session</h2>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => logout()} variant="outline" className="gap-2">
                <LogOut size={16} /> Log out
              </Button>
              <Button onClick={() => setConfirmOpen(true)} variant="destructive" className="gap-2">
                <Trash2 size={16} /> Delete account
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Sheet open={confirmOpen} onOpenChange={setConfirmOpen}>
        <SheetContent side="bottom" className="rounded-t-xl">
          <SheetHeader>
            <SheetTitle className="text-navy">Delete account?</SheetTitle>
            <SheetDescription>
              This permanently removes your account and cannot be undone. Any project inquiries you have
              submitted are retained for record-keeping.
            </SheetDescription>
          </SheetHeader>
          <div className="flex items-start gap-2.5 mt-4 px-1 text-[13px] text-ink-soft bg-mist rounded-sm p-3">
            <AlertTriangle size={15} className="flex-shrink-0 mt-0.5 text-gold-deep" />
            <span>You will be signed out immediately after deletion.</span>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <Button onClick={handleDelete} variant="destructive" className="w-full gap-2" disabled={deleting}>
              {deleting ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Deleting…
                </>
              ) : (
                "Yes, delete my account"
              )}
            </Button>
            <Button onClick={() => setConfirmOpen(false)} variant="outline" className="w-full" disabled={deleting}>
              Cancel
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}